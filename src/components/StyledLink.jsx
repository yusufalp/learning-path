import { Link } from "react-router";

export default function StyledLink({ to, children, className = "", ...props }) {
  const defaultStyle = `
    text-blue-600  hover:text-blue-700 hover:underline transition-colors
  `;

  return (
    <Link
      to={to}
      className={`
        ${defaultStyle}
        ${className}
      `}
      {...props}
    >
      {children}
    </Link>
  );
}
