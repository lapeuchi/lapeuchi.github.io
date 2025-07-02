import { fromMarkdown } from 'mdast-util-from-markdown';
import { visit } from 'unist-util-visit';

type Heading = { level: number; id: string; text: string };

export function extractHeadings(markdown: string): Heading[] {
  const tree = fromMarkdown(markdown);
  const headings: Heading[] = [];

  visit(tree, 'heading', (node: any) => {
    // 코드블록 내 헤더는 mdast 구조상 여기에 안 들어옴 (자동 필터됨)
    const depth = node.depth;
    if (depth < 2 || depth > 3) return; // h2~h3만

    const text = node.children
      .filter((child: any) => child.type === 'text' || child.type === 'inlineCode')
      .map((child: any) => child.value)
      .join('');

    const id = text
      .toLowerCase()
      .replace(/[^\w가-힣\- ]+/g, '')
      .replace(/\s+/g, '-');

    headings.push({ level: depth, id, text });
  });

  return headings;
}
