---
title: "Astro에서 자동 목차 만들기"
tags: ["astro", "markdown", "목차"]
---

## 1. 소개

Astro에서 마크다운 파일로 블로그를 만들 때, 자동으로 목차를 생성하는 방법을 설명합니다.

## 2. 설정 방법

### 2-1. rehype-slug 추가

```js
import rehypeSlug from 'rehype-slug';
```

## 3. 예제 코드: `src/pages/posts/[...slug].astro`

```astro
---
import { getEntryBySlug } from 'astro:content';
import BaseLayout from '@/layouts/baseLayout.astro';

const { slug } = Astro.params;
const slugPath = Array.isArray(slug) ? slug.join('/') : slug;

const post = await getEntryBySlug('posts', slugPath);
if (!post) throw new Error(`Post not found: ${slugPath}`);

const { Content, data } = post;
---

<BaseLayout>
  <div class="container mt-5">
    <h1 class="mb-2">{data.title}</h1>

    <div class="mb-3">
      {data.tags?.map(tag => (
        <span class="badge bg-light text-dark me-1">#{tag}</span>
      ))}
    </div>

    <hr />

    <article class="markdown-body">
      <Content />
    </article>
  </div>
</BaseLayout>
asd
```

```md

## 이게 목차 목록에 뜨는데 이동은 안되네?
```
asd