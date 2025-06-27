import { getCollection } from 'astro:content';

export async function getAllSeriesPaths() {
  const entries = await getCollection('posts');
  const seriesSet = new Set(entries.map(entry => entry.slug.split('/')[0]));

  return Array.from(seriesSet).map(series => ({
    params: { series }
  }));
}

// ✅ 동적 라우팅용 path 목록
export async function getAllPostPaths() {
  const entries = await getCollection('posts');
  return entries.map(entry => {
    const [series, slug] = entry.slug.split('/');
    return { params: { series, slug } };
  });
}