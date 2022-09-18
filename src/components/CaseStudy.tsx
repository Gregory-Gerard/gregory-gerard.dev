import React from 'react';

export default function CaseStudy({
  title,
  headline,
  background,
  icon,
  url,
}: {
  title: string;
  headline: string;
  background: string;
  icon: React.FC<React.HTMLAttributes<Element>>;
  url: string | undefined;
}) {
  const Icon = icon;

  return (
    <a
      href={url || '#'}
      className="flex flex-col items-center gap-4 rounded-2xl overflow-hidden px-8 py-10 shadow-outline text-center bg-cover bg-center transition-transform hover:scale-[1.01]"
      style={{ backgroundImage: `url(${background})` }}
    >
      {<Icon className="w-16 h-16" />}
      <div className="flex flex-col gap-1">
        <h3 className="text-lg leading-tight font-bold">{title}</h3>
        <p>{headline}</p>
      </div>
    </a>
  );
}
