import React from 'react';

export default function RoundedLink(
  props: React.ComponentPropsWithoutRef<'a'>
) {
  return (
    <a
      className="inline-flex p-2 rounded-full align-middle hover:bg-white/5 transition-colors"
      {...props}
    >
      {props.children}
    </a>
  );
}
