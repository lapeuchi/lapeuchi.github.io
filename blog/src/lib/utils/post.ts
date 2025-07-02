import { getCollection, type CollectionEntry } from 'astro:content';
import { getCreatedDate } from './file';

export type Post = {
  slug: string;
  title: string;
  tags: string[];
  date: string;
  content: string;
};

export type SeriesInfo = {
  title: string;
  description: string;
  posts: Post[];
};

// ✅ 전체 시리즈 맵
export type SeriesMap = Record<string, SeriesInfo>;

// ✅ 전체 시리즈 + 게시물 구조 구성
export async function getPostStructure(): Promise<SeriesMap> {
  const postEntries = await getCollection('posts');
  const seriesEntries = await getCollection('series');

  const result: SeriesMap = {};

  for (const entry of postEntries) {
    let { series, slug } = splitSlug(entry);
    slug = slug.replace(/\.md$/, '');

    if (!result[series]) {
      const meta = seriesEntries.find((s) => s.id.replace(/\.md$/, '') === series);

      if (!meta) {
        console.warn('⚠️ 시리즈 파일을 못 찾음:', series);
      } else if (!meta.data.title) {
        console.warn('⚠️ 시리즈 title 없음:', series);
      }

      result[series] = {
        title: meta?.data.title ?? series,
        description: meta?.data.description ?? '',
        posts: [],
      };
    }

    result[series].posts.push(toPost(slug, entry));
  }
  
  return result;
}

// ✅ 특정 시리즈의 게시물 목록만 반환
export async function getPostsBySeries(series: string): Promise<Post[]> {
  const entries = await getCollection('posts');
  return entries
    .filter((e) => e.id.startsWith(`${series}/`) && !e.id.endsWith('/_series'))
    .map((e) => toPost(splitSlug(e).slug, e));
}

// ✅ 단일 게시물 조회
export async function getPostData(series: string, slug: string): Promise<CollectionEntry<'posts'>> {
   const fullSlug = `${series}/${slug}`;
  const entries = await getCollection('posts');

  const post = entries.find((e) => e.id === fullSlug+'.md');

  if (!post) {
    throw new Error(`게시물을 찾을 수 없습니다: ${series}/${slug}`);
  }

  return post;
}

// ✅ entry.id → series, slug 분리
function splitSlug(entry: CollectionEntry<'posts'>) {
  const [series, slug] = entry.id.split('/');
  return { series, slug };
}

// ✅ 게시물 객체 변환
function toPost(slug: string, entry: CollectionEntry<'posts'>): Post {
  const data = entry.data as { title?: string; tags?: string[] };
  console.log('테스트', slug);
  return {
    slug,
    title: data.title ?? slug,
    tags: data.tags ?? [],
    date: getCreatedDate(entry.filePath),
    content: '',
  };
}