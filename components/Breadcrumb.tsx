import Avatar from './Avatar';
import Link from 'next/link';

type NonEmptyArray<T> = [T, ...T[]];

export default function Breadcrumb(props: {
  pages: NonEmptyArray<{ name: string; url?: string | undefined }>;
}) {
  const pages = [...props.pages];
  const lastPage = pages.pop();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-8 w-full pb-8 border-b border-zinc-800">
      <Link href="/" title="Page d'accueil" className="shrink-0">
        <Avatar className="h-16 w-16" />
      </Link>

      <nav
        className="flex px-5 py-3 rounded-2xl bg-zinc-800/50 shadow-outline"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-1 md:space-x-3 min-w-0">
          <li className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-sm font-medium text-zinc-400 hover:text-zinc-50"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Accueil
            </Link>
          </li>

          {pages.map((item) => (
            <li key={item.name}>
              <div className="flex items-center">
                <Arrow />

                <Link
                  href={item.url || '#'}
                  className="ml-1 text-sm font-medium md:ml-2 text-zinc-400 hover:text-zinc-50"
                >
                  {item.name}
                </Link>
              </div>
            </li>
          ))}

          {lastPage && (
            <li aria-current="page" className="min-w-0">
              <div className="flex items-center">
                <Arrow />

                <span className="ml-1 text-sm font-medium md:ml-2 text-zinc-300 truncate">
                  {lastPage.name}
                </span>
              </div>
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
}

function Arrow() {
  return (
    <svg
      className="w-6 h-6 text-zinc-400 shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
