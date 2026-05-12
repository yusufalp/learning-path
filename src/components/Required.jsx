export default function Required({
  text = "",
  showAsterisk = true,
  className = "",
  ...props
}) {
  const defaultStyle = `
    text-red-500 text-sm font-medium
  `;

  return (
    <span className={`${defaultStyle}${className}`} {...props}>
      {showAsterisk && "*"}
      {text && ` ${text}`}
    </span>
  );
}
