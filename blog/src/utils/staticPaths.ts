import { getCollection } from 'astro:content';

// ✅ 시리즈 목록 (posts/unity/hello-unity.md → "unity")
export async function getAllSeriesPaths() {
  const entries = await getCollection('series');

  return entries.map(entry => ({
    params: { series: entry.id.toLowerCase().replace(/\.md$/, '') }
  }));
}

// ✅ 포스트 목록 (posts/unity/hello-unity.md → "unity", "hello-unity")
export async function getAllPostPaths() {
  const entries = await getCollection('posts');

  return entries
    .map(entry => {
      let [series, slug] = entry.id.split('/');
      series = series.toLocaleLowerCase()
      slug = slug.replace(/\.md$/, '').toLocaleLowerCase();
      
      return { params: { series, slug } };
    });
}
