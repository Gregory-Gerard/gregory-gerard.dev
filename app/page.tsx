import React from 'react';
import Link from 'next/link';
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

export default async function Home() {
  const cases = getCases();
  const articles = getArticles().slice(0, 3);

  return (
    <>
      <Section>
        <Avatar className="w-24 h-24" />
        <h1 className="max-w-3xl text-5xl sm:text-6xl tracking-tight font-bold">
          Software developer{' '}
          <span className="whitespace-nowrap">
            at&nbsp;
            <RoundedLink
              href="https://la-boite-immo.com"
              target="_blank"
              rel="noreferrer"
              title="Site de La Boîte Immo"
            >
              <LaBoiteImmoIcon className="inline" />
            </RoundedLink>
          </span>
        </h1>

        <p className="max-w-3xl leading-relaxed text-zinc-400">
          I&apos;m Grégory, a {oldness()}-year-old full-stack web developer from Hyères, France. I am currently
          Lead&nbsp;Developer at&nbsp;
          <UnderlinedLink href="https://la-boite-immo.com" target="_blank" rel="noreferrer">
            La Boîte Immo
          </UnderlinedLink>
          , a company that produces leading software in the real estate sector. Additionally, I work as a freelancer to
          assist you with your projects.
        </p>

        <div className="flex gap-6 text-zinc-400">
          <RoundedLink href="https://www.linkedin.com/in/gregoryger/" target="_blank" title="Linkedin">
            <Linkedin size={24} />
          </RoundedLink>
          <RoundedLink href="https://github.com/Gregory-Gerard/gregory-gerard.dev" target="_blank" title="Github">
            <GitHub size={24} />
          </RoundedLink>
          <RoundedLink href="mailto:contact@gregory-gerard.dev" target="_blank" title="Email">
            <Mail size={24} />
          </RoundedLink>
        </div>
      </Section>

      <Section title="A few case studies">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
        <Section title="My notes" className="col-span-2 lg:pr-4">
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
            See more
          </Link>
        </Section>

        <aside className="flex flex-col gap-6 p-6 rounded-2xl shadow-outline">
          <strong className="font-medium text-100">Experience</strong>

          <Resume />
        </aside>
      </div>

      <Footer />
    </>
  );
}
