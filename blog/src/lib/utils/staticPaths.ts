import fs from 'fs';
import path from 'path';

export function getAllSeriesPaths() {
  const postsRoot = path.join(process.cwd(), 'src/content/posts');
  const seriesList = fs.readdirSync(postsRoot).filter(name =>
    fs.statSync(path.join(postsRoot, name)).isDirectory()
  );

  return seriesList.map(series => ({
    params: { series }
  }));
}

export function getAllPostPaths() {
  const postsRoot = path.join(process.cwd(), 'src/content/posts');
  const paths = [];

  const seriesList = fs.readdirSync(postsRoot).filter(name =>
    fs.statSync(path.join(postsRoot, name)).isDirectory()
  );

  for (const series of seriesList) {
    const dir = path.join(postsRoot, series);
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

    for (const file of files) {
      const slug = file.replace(/\.md$/, '');
      paths.push({ params: { series, slug } });
    }
  }

  return paths;
}
