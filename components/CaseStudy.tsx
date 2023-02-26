import React from 'react';
import Link from 'next/link';

export default function CaseStudy({
  title,
  headline,
  icon,
  url,
}: {
  title: string;
  headline: string;
  icon: React.ElementType;
  url: string | undefined;
}) {
  const Icon = icon;

  return (
    <Link
      href={url || '#'}
      className="flex flex-col items-center gap-4 rounded-2xl overflow-hidden px-8 py-10 shadow-outline text-center bg-zinc-800/20 transition-transform hover:scale-[1.01] focus:scale-105"
    >
      <Icon className="w-16 h-16" />
      <div className="flex flex-col gap-1">
        <h3 className="text-lg leading-tight font-bold">{title}</h3>
        <p>{headline}</p>
      </div>
    </Link>
  );
}
