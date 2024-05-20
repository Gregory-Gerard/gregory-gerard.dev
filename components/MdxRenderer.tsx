import React from 'react';
import { compileSync, runSync } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';

export default function MdxRenderer({ markdown }: { markdown: string }) {
  const generatedHtml = compileSync(markdown, {
    outputFormat: 'function-body',
    development: false,
  });

  // @ts-expect-error
  const { default: Content } = runSync(String(generatedHtml), {
    ...runtime,
  });

  return <Content components={{}} />;
}
