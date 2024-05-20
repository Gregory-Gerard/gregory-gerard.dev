import React from 'react';
import Image from 'next/image';
import icon from '@/public/cases/pitchoun/pitchoun.png';

export default function PitchounIcon(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof Image>,
    'src' | 'alt' | 'placeholder'
  >,
) {
  return (
    <Image
      src={icon}
      alt="Logo Pitchoun Médias"
      placeholder="blur"
      {...props}
    />
  );
}
