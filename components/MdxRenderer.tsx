import React from 'react';
import { compile, runSync } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import rehypeShiki from '@shikijs/rehype';
import { transformerNotationDiff } from '@shikijs/transformers';
import { ShikiTransformer } from 'shiki';

export default async function MdxRenderer({ markdown }: { markdown: string }) {
  const generatedHtml = await compile(markdown, {
    outputFormat: 'function-body',
    development: false,
    rehypePlugins: [
      [
        rehypeShiki,
        {
          theme: 'vitesse-dark',
          transformers: [
            {
              pre(node) {
                this.addClassToHast(node, 'not-prose');
              },
            },
            transformerNotationDiff(),
          ] as ShikiTransformer[],
        },
      ],
    ],
  });

  // @ts-expect-error
  const { default: Content } = runSync(String(generatedHtml), {
    ...runtime,
  });

  return <Content components={{}} />;
}
