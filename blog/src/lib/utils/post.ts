import { getCollection, type CollectionEntry } from 'astro:content';
import { getCreatedDate } from './file';
import { getEntry } from 'astro:content';

export type Post = {
  slug: string;
  title: string;
  tags: string[];
  date: string;
  content: string;
};

type SeriesInfo = {
  title: string;
  description?: string;
  posts: Post[];
};

export type SeriesMap = {
  [series: string]: SeriesInfo;
};

// ✅ 시리즈 md에서 메타데이터 읽기
export async function getSeriesData(seriesId: string) {
  try {
    const entry = await getEntry('series', seriesId);
    return {
      title: entry.data.title, // fallback 처리 여기서!
      description: entry.data.description,
    };
  } catch {
    return {
      title: seriesId,
      description: '',
    };
  }
}

// ✅ 전체 시리즈 + 게시물 구조
export async function getPostStructure(): Promise<SeriesMap> {
  const entries = await getCollection('posts');
  const result: SeriesMap = {};

  for (const entry of entries) {
    const { series } = splitSlug(entry);

    if (!result[series]) {
      const meta = await getSeriesData(series);
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

// ✅ 특정 시리즈 게시물
export async function getPostsBySeries(series: string): Promise<Post[]> {
  const entries = await getCollection('posts');
  return entries.filter(e => e.id.startsWith(`${series}/`)).map(toPost);
}

// ✅ 단일 게시물
export async function getPostData(series: string, slug: string): Promise<CollectionEntry<'posts'> | undefined> {
  const fullSlug = `${series}/${slug}`;
  const entries = await getCollection('posts');
  return entries.find(e => e.id === fullSlug);
}

function splitSlug(entry: CollectionEntry<'posts'>) {
  const [series, slug] = entry.id.split('/');
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
