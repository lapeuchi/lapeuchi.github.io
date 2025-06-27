import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import { marked } from 'marked';
import { getCreatedDate } from './file';
import type { Post, SeriesMap } from '../types/series'; // 타입들 import

// ✅ 특정 시리즈 폴더의 md 파일만 반환
export function getMarkdownFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter(file => file.endsWith('.md')).sort();
}

// ✅ 전체 게시물 경로 반환 (Dynamic Routing용)
export function getAllPostPaths(postsRoot: string) {
  const paths: { params: { series: string; slug: string } }[] = [];

  const seriesFolders = fs.readdirSync(postsRoot).filter(name =>
    fs.statSync(path.join(postsRoot, name)).isDirectory()
  );

  for (const series of seriesFolders) {
    const dir = path.join(postsRoot, series);
    const files = getMarkdownFiles(dir);

    for (const file of files) {
      const slug = file.replace(/\.md$/, '');
      paths.push({ params: { series, slug } });
    }
  }

  return paths;
}

// ✅ 단일 게시물 데이터 반환
export function getMarkdownData(series: string, slug: string): Post {
  const filename = slug.endsWith('.md') ? slug : `${slug}.md`;
  const filePath = path.join(process.cwd(), 'src/content/posts', series, filename);
  
  const { data, content } = matter(fs.readFileSync(filePath, 'utf-8'));

  return {
    slug: filename.replace(/\.md$/, ''),
    title: data.title || slug,
    tags: data.tags || [],
    date: getCreatedDate(filePath),
    content
  };
}

// ✅ 특정 시리즈에 속한 게시물 목록 반환
export function getMarkdownDatas(series: string): Post[] {
  const dir = path.join(process.cwd(), 'src/content/posts', series);
  const files = getMarkdownFiles(dir);

  return files.map(file => getMarkdownData(series, file));
}

// 특정 시리즈의 데이터를 반환합니다.
export function getSeriesData(series: string) {
  const ymlPath = path.join(process.cwd(), 'src/content/posts', '@', series, '.yml');

  if (!fs.existsSync(ymlPath)) 
      return null;

  const content = fs.readFileSync(ymlPath, 'utf-8');
  const data = yaml.load(content);

  return data; // 보통 { title: string, description?: string } 형태
}

// ✅ 시리즈 전체 구조 반환
export function getPostStructure(): SeriesMap {
  const postsRoot = path.join(process.cwd(), 'src/content/posts');
  const seriesFolders = fs.readdirSync(postsRoot).filter(name =>
    fs.statSync(path.join(postsRoot, name)).isDirectory()
  );

  const result: SeriesMap = {};

  for (const series of seriesFolders) {
    const posts = getMarkdownDatas(series);

    result[series] = {
      title: series,
      posts,
    };
  }

  return result;
}
