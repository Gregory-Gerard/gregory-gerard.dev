import { format } from 'date-fns/format';
import { fr } from 'date-fns/locale/fr';
import { Article } from '@/types/article';
import Link from 'next/link';

export default function ArticlePreview(
  props: Omit<Article, 'layout' | 'headline'> & {
    url: string | undefined;
    publishedAt: Date;
  },
) {
  return (
    <Link
      href={props.url || '#'}
      className="relative before:block before:absolute before:-inset-3 sm:before:-inset-4 before:rounded-2xl before:scale-95 hover:before:scale-100 before:opacity-0 hover:before:opacity-100 before:transition-all before:pointer-events-none before:bg-zinc-800/50 before:shadow-outline"
    >
      <article className="relative flex flex-col gap-4">
        <h1 className="leading-loose font-medium text-zinc-100">
          {props.title}
        </h1>
        <p className="text-sm leading-relaxed text-zinc-400 line-clamp-3 lg:max-w-xl">
          {props.metaDescription}
        </p>
        <time
          dateTime={props.publishedAt.toISOString()}
          className="text-xs text-zinc-500"
        >
          {format(props.publishedAt, "'le' dd MMMM yyyy", { locale: fr })}
        </time>
      </article>
    </Link>
  );
}
