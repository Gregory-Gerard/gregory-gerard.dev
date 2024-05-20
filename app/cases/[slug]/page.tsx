import React from 'react';
import { getCase, getCases } from '@/services/case';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import * as Icons from '@/components/icons';
import Footer from '@/components/Footer';
import MdxRenderer from '@/components/MdxRenderer';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const item = getCase(slug);

  if (!item) {
    notFound();
  }

  return {
    title: item.frontmatter.title,
    description: item.frontmatter.headline,
  };
}

export default function Page({ params: { slug } }: Props) {
  const item = getCase(slug);

  if (!item) {
    notFound();
  }

  const Icon = Icons[item.frontmatter.icon as keyof typeof Icons];

  return (
    <>
      <div className="flex max-w-prose mx-auto mb-12">
        <Breadcrumb pages={[{ name: item.frontmatter.title }]} />
      </div>

      <article>
        <header className="flex flex-col gap-2 max-w-prose mx-auto mb-8">
          <Icon className="w-16 h-16" />
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">{item.frontmatter.title}</h1>
          <h2 className="text-md sm:text-lg font-medium text-zinc-400 tracking-wide">{item.frontmatter.headline}</h2>
        </header>

        <section className="!prose prose-zinc !prose-invert prose-img:rounded-md prose-img:shadow-xl mx-auto">
          <MdxRenderer markdown={item.content} />
        </section>
      </article>

      <div className="max-w-prose mx-auto">
        <Footer />
      </div>
    </>
  );
}

export function generateStaticParams() {
  const cases = getCases();

  return cases.map(({ file }) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}
