import ArticlePreview from '@/components/ArticlePreview';
import Breadcrumb from '@/components/Breadcrumb';
import { getArticles } from '@/services/article';
import Section from '@/components/Section';

export default function Page() {
  const articles = getArticles();

  return (
    <>
      <div className="flex mb-12">
        <Breadcrumb pages={[{ name: 'Articles' }]} />
      </div>

      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8">All my posts</h1>
      <p className="leading-loose tracking-tight text-zinc-400 mb-16">
        In my spare time, I write articles on topics I&apos;m interested in: development, infrastructure, technology...
      </p>

      <div className="flex flex-col gap-8">
        <Section>
          {articles.map((article) => (
            <ArticlePreview
              key={article.frontmatter.title}
              title={article.frontmatter.title}
              metaDescription={article.frontmatter.metaDescription}
              url={`articles/${article.file.replace(/\.md$/, '')}`}
              publishedAt={article.frontmatter.publishedAt}
            />
          ))}
        </Section>
      </div>
    </>
  );
}
