import React from 'react';

export default function UnderlinedLink(
  props: React.ComponentPropsWithoutRef<'a'>
) {
  return (
    <a
      className="inline-flex leading-tight hover:leading-normal border-b border-b-current transition-all"
      {...props}
    >
      {props.children}
    </a>
  );
}
