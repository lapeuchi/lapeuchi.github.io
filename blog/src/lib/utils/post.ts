import { getCollection, type CollectionEntry } from 'astro:content';
import { getCreatedDate } from './file';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export type Post = {
  slug: string;
  title: string;
  tags: string[];
  date: string;
  content: string;
};

// 수정된 타입 정의
type SeriesInfo = {
  title: string;
  description?: string;
  posts: Post[];
};

export type SeriesMap = {
  [series: string]: SeriesInfo;
};


// YAML 메타데이터 읽기
export function getSeriesData(series: string) {
  const filePath = path.join(process.cwd(), 'public', 'series', `${series}.yml`);
  console.log('[🔍 YAML 경로]', filePath);

  if (!fs.existsSync(filePath)) {
    console.warn('[❌ YAML 없음]', filePath);
    return null;
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  console.log('[✅ YAML 읽음]', raw);
  return yaml.load(raw) as { title?: string; description?: string } | null;
}

// 전체 시리즈 + 게시물 구조 반환
export async function getPostStructure(): Promise<SeriesMap> {
  const entries = await getCollection('posts');
  const result: SeriesMap = {};

  for (const entry of entries) {
    const { series } = splitSlug(entry);

    if (!result[series]) {
      const meta = getSeriesData(series);
      result[series] = {
        title: meta?.title || series,
        description: meta?.description || '',
        posts: [],
      };
    }

    result[series].posts.push(toPost(entry));
  }

  return result;
}

// 특정 시리즈 게시물 목록
export async function getPostsBySeries(series: string): Promise<Post[]> {
  const entries = await getCollection('posts');
  return entries.filter(e => e.slug.startsWith(`${series}/`)).map(toPost);
}

// 단일 게시물 정보
export async function getPostData(series: string, slug: string): Promise<CollectionEntry<'posts'> | undefined> {
  const fullSlug = `${series}/${slug}`;
  const entries = await getCollection('posts');
  return entries.find(e => e.slug === fullSlug);
}

function splitSlug(entry: CollectionEntry<'posts'>) {
  const [series, slug] = entry.slug.split('/');
  return { series, slug };
}

function toPost(entry: CollectionEntry<'posts'>): Post {
  const { slug } = splitSlug(entry);
  return {
    slug,
    title: entry.data.title || slug,
    tags: entry.data.tags || [],
    date: getCreatedDate(entry.filePath),
    content: '',
  };
}
