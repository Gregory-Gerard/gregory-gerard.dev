import React from 'react';
import Image from 'next/image';
import avatar from '@/public/coucou.jpg';

export default function Avatar({ className }: { className: string }) {
  return (
    <Image
      src={avatar}
      alt="Photo de moi"
      placeholder="blur"
      className={`rounded-full object-cover shadow bg-zinc-800 ${className}`}
    />
  );
}
