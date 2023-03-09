import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { GitHub, Linkedin, Mail } from 'react-feather';
import Avatar from '@/components/Avatar';
import RoundedLink from '@/components/RoundedLink';
import UnderlinedLink from '@/components/UnderlinedLink';
import LaBoiteImmoIcon from '@/components/icons/LaBoiteImmoIcon';
import CaseStudy from '@/components/CaseStudy';
import * as Icons from '@/components/icons';
import { getCases } from '@/services/case';
import { getArticles } from '@/services/article';
import ArticlePreview from '@/components/ArticlePreview';
import Resume from '@/components/Resume';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { oldness } from '@/utils/oldness';

export const metadata: Metadata = {
  title: 'Grégory — Développeur web',
  description: `Je suis Grégory, un développeur web full-stack de ${oldness()} ans basé à Hyères.`,
  icons: '/favicon.svg',
};

export const revalidate = Infinity;

export default async function Home() {
  const cases = getCases();
  const articles = getArticles().slice(0, 3);

  return (
    <>
      <Section>
        <Avatar className="w-24 h-24" />
        <h1 className="max-w-4xl text-5xl sm:text-6xl tracking-tight font-bold">
          Développeur web full-stack chez&nbsp;
          <RoundedLink href="https://la-boite-immo.com" target="_blank" rel="noreferrer" title="Site de La Boîte Immo">
            <LaBoiteImmoIcon className="inline" />
          </RoundedLink>
        </h1>

        <p className="max-w-3xl leading-relaxed text-zinc-400">
          Je suis Grégory, un développeur web full-stack de {oldness()} ans, actuellement sur Hyères. En ce moment je
          suis Tech Lead chez&nbsp;
          <UnderlinedLink href="https://la-boite-immo.com" target="_blank" rel="noreferrer">
            La Boîte Immo
          </UnderlinedLink>
          , une société éditant des logiciels phares dans le secteur de l&apos;immobilier. En parallèle, je suis aussi
          freelance afin de vous accompagner dans vos projets.
        </p>

        <div className="flex gap-6 text-zinc-400">
          <RoundedLink href="https://www.linkedin.com/in/gregoryger/" target="_blank" title="Mon profil Linkedin">
            <Linkedin size={24} />
          </RoundedLink>
          <RoundedLink
            href="https://github.com/Gregory-Gerard/gregory-gerard.dev"
            target="_blank"
            title="Mon profil Github"
          >
            <GitHub size={24} />
          </RoundedLink>
          <RoundedLink href="mailto:contact@gregory-gerard.dev" target="_blank" title="Me contacter par email">
            <Mail size={24} />
          </RoundedLink>
        </div>
      </Section>

      <Section title="Quelques études de cas">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((item) => (
            <CaseStudy
              key={item.frontmatter.title}
              title={item.frontmatter.title}
              headline={item.frontmatter.headline}
              icon={Icons[item.frontmatter.icon as keyof typeof Icons]}
              url={`cases/${item.file.replace(/\.md$/, '')}`}
            />
          ))}
        </div>
      </Section>

      <div className="grid grid-cols-1 grid-cols-3 lg:gap-4">
        <Section title="Mes notes" className="col-span-2 lg:pr-4">
          {articles.map((article) => (
            <ArticlePreview
              key={article.frontmatter.title}
              title={article.frontmatter.title}
              metaDescription={article.frontmatter.metaDescription}
              url={`articles/${article.file.replace(/\.md$/, '')}`}
              publishedAt={article.frontmatter.publishedAt}
            />
          ))}

          <Link
            href={'/articles'}
            className="sm:self-start px-6 py-2 bg-zinc-800/50 hover:bg-zinc-800 text-center sm:text-left font-medium text-sm tracking-wide rounded-2xl transition-colors"
          >
            En voir plus
          </Link>
        </Section>

        <aside className="flex flex-col gap-6 p-6 rounded-2xl shadow-outline">
          <strong className="font-medium text-100">Parcours</strong>

          <Resume />
        </aside>
      </div>

      <Footer />
    </>
  );
}
