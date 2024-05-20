import React from 'react';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import MdxRenderer from '@/components/MdxRenderer';
import { getArticle, getArticles } from '@/services/article';

export default function Page({ params: { slug } }: { params: { slug: string } }) {
  const item = getArticle(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <div className="flex max-w-prose mx-auto mb-12">
        <Breadcrumb pages={[{ name: 'Articles', url: '/articles' }, { name: item.frontmatter.title }]} />
      </div>

      <article>
        <header className="flex flex-col gap-2 max-w-prose mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">{item.frontmatter.title}</h1>
          <h2 className="text-md sm:text-lg font-medium text-zinc-400 tracking-wide">{item.frontmatter.headline}</h2>
          <time className="text-xs text-zinc-500 tracking-wider">
            Publié le {new Date(item.frontmatter.publishedAt).toLocaleString()}
          </time>
        </header>

        <section className="!prose prose-zinc !prose-invert prose-img:rounded-md prose-img:shadow-xl mx-auto">
          <MdxRenderer markdown={item.content} />
        </section>

        <footer className="max-w-prose mx-auto mt-12">
          <small className="text-zinc-500 text-xs tracking-wider">
            <a
              href={`https://github.com/Gregory-Gerard/gregory-gerard.dev/blob/main/app/articles/${slug}.md`}
              target="_blank"
              className="underline"
            >
              Contribute
            </a>{' '}
            to the article if you have any corrections or improvements to suggest!
          </small>
        </footer>
      </article>

      <div className="max-w-prose mx-auto">
        <Footer />
      </div>
    </>
  );
}

export function generateStaticParams() {
  const articles = getArticles();

  return articles.map(({ file }) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}
