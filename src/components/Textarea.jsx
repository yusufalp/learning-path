import Required from "./Required";

export default function Textarea({
  label,
  id,
  required = false,
  className = "",
  rows = 4,
  ...props
}) {
  const defaultStyleLabel = `
    block text-sm font-medium text-gray-700
  `;

  const defaultStyleTextarea = `
    w-full mb-4 px-4 py-3
    border border-gray-300 rounded-xl
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    transition-all duration-200
    text-gray-900 placeholder:text-gray-400 resize-y
  `;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className={defaultStyleLabel}>
          {label}
          {required && <Required />}
        </label>
      )}

      <textarea
        id={id}
        required={required}
        rows={rows}
        className={`
            ${defaultStyleTextarea}
            ${className}
        `}
        {...props}
      />
    </div>
  );
}
