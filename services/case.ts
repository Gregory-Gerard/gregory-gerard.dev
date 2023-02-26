import fs from 'fs';
import path from 'path';
import process from 'process';
import matter from 'gray-matter';
import { Case } from '@/types/case';

export const getCases = () => {
  return fs
    .readdirSync(path.resolve(process.cwd(), 'app/cases/'))
    .filter((filename) => filename.match(/\.mdx?$/i))
    .map((file) => ({
      content: fs.readFileSync(
        path.resolve(process.cwd(), 'app/cases/', file),
        {
          encoding: 'utf8',
        }
      ),
      file,
    }))
    .map(({ content, file }) => ({ matter: matter(content), file }))
    .map(({ matter, file }) => ({
      frontmatter: Case.parse(matter.data),
      content: matter.content,
      file,
    }))
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
};

export const getCase = (
  slug: string
): { frontmatter: Case; content: string } | null => {
  const file = path.resolve(process.cwd(), 'app/cases/', `${slug}.md`);

  if (!fs.existsSync(file)) {
    return null;
  }

  const resolved = matter(
    fs.readFileSync(path.resolve(process.cwd(), 'app/cases/', file), {
      encoding: 'utf8',
    })
  );

  return {
    frontmatter: Case.parse(resolved.data),
    content: resolved.content,
  };
};
