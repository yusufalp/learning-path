export default function Card({
  children,
  className = "",
  title = "",
  ...props
}) {
  const defaultStyleCard = `
    bg-white border border-gray-200 rounded-2xl shadow-md
    w-full max-w-md min-w-3xs p-6
  `;

  const defaultStyleTitle = `
    text-2xl text-gray-900 text-center
    font-semibold mb-8
  `;

  return (
    <div
      className={`
        ${defaultStyleCard}
        ${className}
      `}
      {...props}
    >
      {title && <h2 className={defaultStyleTitle}>{title}</h2>}
      {children}
    </div>
  );
}
