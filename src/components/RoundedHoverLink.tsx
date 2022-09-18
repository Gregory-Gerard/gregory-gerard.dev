import React from 'react';

export default function RoundedHoverLink(
  props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a className="inline-flex p-2 rounded-full align-middle hover:bg-white/5 transition-colors" {...props}>
      {props.children}
    </a>
  );
}
