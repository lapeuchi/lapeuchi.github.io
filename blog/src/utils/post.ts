import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = {
  slug: string;
  title: string;
  tags: string[];
  date: string;
};

export type SeriesInfo = {
  title: string;
  description: string;
  posts: Post[];
};

export type SeriesMap = Record<string, SeriesInfo>;

// 전체 시리즈 + 게시물 구조
export async function getPostStructure(): Promise<SeriesMap> {
  const postEntries = await getCollection('posts');
  const seriesEntries = await getCollection('series');

  const result: SeriesMap = {};

  for (const entry of postEntries) {
    let { series, slug } = splitSlug(entry);
    series = series.toLowerCase();
    slug = slug.replace(/\.md$/, '').toLowerCase();

    if (!result[series]) {
      const meta = seriesEntries.find((s) => s.id.replace(/\.md$/, '') === series);

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

export async function getSeriesData(series: string) {
  const seriesMap = await getPostStructure();
  
  const seriesData = seriesMap[series];

  return seriesData;
}


// ✅ 단일 게시물 데이터 조회
export async function getPostData(series: string, slug: string): Promise<CollectionEntry<'posts'>> {
  const fullSlug = `${series}/${slug}`;
  const entries = await getCollection('posts');

  const post = entries.find((e) => e.id === fullSlug + '.md');

  if (!post) {
    throw new Error(`게시물을 찾을 수 없습니다: ${series}/${slug}`);
  }

  return post;
}

// entry.id → series/slug 분리
function splitSlug(entry: CollectionEntry<'posts'>) {
  const [series, slug] = entry.id.split('/');
  return { series, slug };
}

// 게시물 메타데이터 변환
function toPost(slug: string, entry: CollectionEntry<'posts'>): Post {
  const data = entry.data
  return {
    slug,
    title: data.title,
    tags: data.tags,
    date: data.upload,
  };
}
