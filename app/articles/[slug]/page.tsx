import React from 'react';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import MdxRenderer from '@/components/MdxRenderer';
import { getArticle, getArticles } from '@/services/article';
import { Metadata } from 'next';
import Image from 'next/image';
import { format } from 'date-fns/format';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const item = getArticle(slug);

  if (!item) {
    notFound();
  }

  return {
    title: item.frontmatter.title,
    description: item.frontmatter.metaDescription,
    metadataBase: new URL('https://gregory-gerard.dev'),
  };
}

export default function Page({ params: { slug } }: Props) {
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
            {format(item.frontmatter.publishedAt, 'dd MMMM yyyy')}
          </time>

          <Image
            src={`/articles/${item.frontmatter.image}`}
            alt={item.frontmatter.title}
            width={1200}
            height={300}
            className="object-cover w-[1200px] h-[300px] bg-zinc-950 rounded-md my-12 md:scale-110 opacity-50"
          />
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
