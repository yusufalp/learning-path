export default function Error({
  errors,
  message,
  className = "",
  title = "",
  ...props
}) {
  if (!errors) return null;
  console.log("errors :>> ", errors);

  const errorList = errors || (message ? [message] : []);

  if (!errorList.length) return null;

  const defaultStyle = `
    bg-red-50 text-red-700
    border border-red-200 
    rounded-xl p-2 my-2
  `;

  return (
    <div
      className={`
        ${defaultStyle}
        ${className}
      `}
      {...props}
    >
      {title && <p className="font-semibold text-red-800 mb-2">{title}</p>}

      <ul className="space-y-1 text-sm">
        {errorList.map((error, index) => (
          <li key={index} className="flex items-start gap-2">
            {/* <span className="text-red-500 mt-0.5">.</span> */}
            <span>{error}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
