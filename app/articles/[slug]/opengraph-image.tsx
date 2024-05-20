import { ImageResponse } from 'next/og';
import { getArticle } from '@/services/article';
import { notFound } from 'next/navigation';
import { join } from 'node:path';
import { readFile } from 'node:fs/promises';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params: { slug } }: { params: { slug: string } }) {
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  let background;
  try {
    background = await readFile(join(process.cwd(), 'public/articles/', article.frontmatter.image));
  } catch (err) {
    console.error(err);

    background = null;
  }

  const interBlackFont = await readFile(join(process.cwd(), 'public/fonts/inter/Inter-Black.ttf'));
  const interMediumFont = await readFile(join(process.cwd(), 'public/fonts/inter/Inter-Medium.ttf'));

  const myself = await readFile(join(process.cwd(), 'public/coucou.jpg'));

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          color: '#d1d5db',
          backgroundImage: background
            ? `linear-gradient(0deg, rgba(24, 24, 27, 0.9), rgba(24, 24, 27, 0.9)), url(data:image/jpeg;base64,${background.toString('base64')})`
            : 'linear-gradient(0deg, rgba(24, 24, 27, 1), rgba(24, 24, 27, 1))',
          backgroundPosition: 'center center',
          width: '100%',
          height: '100%',
          padding: '100px 600px 100px 100px',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '10px',
            margin: 'auto 0',
          }}
        >
          <div style={{ fontSize: 40, fontWeight: 900, color: 'rgb(244 244 245)' }}>{article.frontmatter.title}</div>
          <div style={{ fontSize: 24, fontWeight: 500, color: 'rgb(212 212 216)' }}>{article.frontmatter.headline}</div>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {/* Uh. Satori can read those buffer, and it should not use <Image /> component from Next. And should not spread comment on multiple line, or it breaks "ignore". */}
          {/* @ts-ignore *//* prettier-ignore *//* eslint-disable-next-line @next/next/no-img-element */}
          <img src={Uint8Array.from(myself).buffer} alt="Myself" width="50px" style={{ borderRadius: '9999px' }} />
          <span>Grégory Gérard</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: Uint8Array.from(interBlackFont).buffer,
          weight: 900,
        },
        {
          name: 'Inter',
          data: Uint8Array.from(interMediumFont).buffer,
          weight: 500,
        },
      ],
    },
  );
}
