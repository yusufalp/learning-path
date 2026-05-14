import StyledLink from "./StyledLink";
import useHasRequiredRoles from "../hooks/useHasRequiredRole";

export default function NavMenu({
  links,
  onLinkClick = null,
  className = "",
  ...props
}) {
  const hasRoles = useHasRequiredRoles;
  return (
    <>
      {links.map((link) => {
        const hasPermission = link.roles.length === 0 || hasRoles(link.roles);

        if (!hasPermission) return null;

        return (
          <StyledLink
            key={link.to}
            to={link.to}
            onClick={onLinkClick}
            className={className}
            {...props}
          >
            {link.label}
          </StyledLink>
        );
      })}
    </>
  );
}
