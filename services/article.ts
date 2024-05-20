import fs from 'fs';
import path from 'path';
import process from 'process';
import matter from 'gray-matter';
import { Article } from '@/types/article';

export const getArticles = () => {
  return fs
    .readdirSync(path.resolve(process.cwd(), 'app/articles/'))
    .filter((filename) => filename.match(/\.mdx?$/i))
    .map((file) => ({
      content: fs.readFileSync(
        path.resolve(process.cwd(), 'app/articles/', file),
        {
          encoding: 'utf8',
        },
      ),
      file,
    }))
    .map(({ content, file }) => ({ matter: matter(content), file }))
    .map(({ matter, file }) => ({
      frontmatter: Article.parse(matter.data),
      content: matter.content,
      file,
    }))
    .sort(
      (a, b) =>
        a.frontmatter.publishedAt.getTime() -
        b.frontmatter.publishedAt.getTime(),
    );
};

export const getArticle = (
  slug: string,
): { frontmatter: Article; content: string } | null => {
  const file = path.resolve(process.cwd(), 'app/articles/', `${slug}.md`);

  if (!fs.existsSync(file)) {
    return null;
  }

  const resolved = matter(
    fs.readFileSync(path.resolve(process.cwd(), 'app/articles/', file), {
      encoding: 'utf8',
    }),
  );

  return {
    frontmatter: Article.parse(resolved.data),
    content: resolved.content,
  };
};
