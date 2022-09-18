/* eslint-disable import/no-absolute-path */

import avatarOriginal from '/assets/coucou.jpg';
import avatarWepb from '/assets/coucou.webp';
import avatarAvif from '/assets/coucou.avif';

export default function Avatar(
  props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
) {
  const { className, ...rest } = props;

  return (
    <picture>
      <source type="image/avif" srcSet={avatarAvif} />
      <source type="image/webp" srcSet={avatarWepb} />
      <img
        src={avatarOriginal}
        className={`rounded-full object-cover shadow bg-zinc-800 ${className}`}
        alt="Grégory Gérard"
        {...rest}
      />
    </picture>
  );
}
