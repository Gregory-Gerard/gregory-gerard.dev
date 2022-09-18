export default function PitchounIcon(
  props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
) {
  return (
    <picture>
      <source type="image/avif" srcSet="/assets/cases/pitchoun/pitchoun.avif" />
      <source type="image/webp" srcSet="/assets/cases/pitchoun/pitchoun.webp" />
      <img src="/assets/cases/pitchoun/pitchoun.png" alt="Logo de du site Pitchoun" {...props} />
    </picture>
  );
}
