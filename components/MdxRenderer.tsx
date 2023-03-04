import React from 'react';
import { compileSync, runSync } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';

type MdxComponent = React.ExoticComponent<{
  components: Record<string, React.ReactNode>;
}>;

export default function MdxRenderer({ markdown }: { markdown: string }) {
  const generatedHtml = compileSync(markdown, {
    outputFormat: 'function-body',
    development: false,
  });

  const { default: Content } = runSync(String(generatedHtml), runtime) as {
    default: MdxComponent;
  };

  return <Content components={{}} />;
}
