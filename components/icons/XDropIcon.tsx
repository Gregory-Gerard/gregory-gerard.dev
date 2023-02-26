import React from 'react';
import Image from 'next/image';
import icon from '@/public/cases/xdrop/xdrop.png';

export default function XDropIcon(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof Image>,
    'src' | 'alt' | 'placeholder'
  >
) {
  return <Image src={icon} alt="Logo xDrop" placeholder="blur" {...props} />;
}
