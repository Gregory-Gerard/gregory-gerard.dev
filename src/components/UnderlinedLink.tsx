export default function UnderlinedLink(
  props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a className="inline-flex leading-tight hover:leading-normal border-b border-b-current transition-all" {...props}>
      {props.children}
    </a>
  );
}
