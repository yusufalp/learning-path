import StyledLink from "./StyledLink";

export default function NavMenu({
  links,
  onLinkClick = null,
  className = "",
  ...props
}) {
  return (
    <>
      {links.map((link) => (
        <StyledLink
          key={link.to}
          to={link.to}
          onClick={onLinkClick}
          className={className}
          {...props}
        >
          {link.label}
        </StyledLink>
      ))}
    </>
  );
}
