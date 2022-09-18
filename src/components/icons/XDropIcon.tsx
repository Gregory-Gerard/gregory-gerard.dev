export default function XDropIcon(
  props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
) {
  return (
    <picture>
      <source type="image/avif" srcSet="/assets/cases/xdrop/xdrop.avif" />
      <source type="image/webp" srcSet="/assets/cases/xdrop/xdrop.webp" />
      <img src="/assets/cases/xdrop/xdrop.png" alt="Logo de l'application xDrop" {...props} />
    </picture>
  );
}
