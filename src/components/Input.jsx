import Required from "./Required";

export default function Input({
  label,
  type = "text",
  id,
  required = false,
  className = "",
  ...props
}) {
  const defaultStyleLabel = `
    block text-sm font-medium text-gray-700
  `;

  const defaultStyleInput = `
    w-full mb-4 px-4 py-3
    border border-gray-300 rounded-xl
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    transition-all duration-200
    text-gray-900 placeholder:text-gray-400
  `;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className={defaultStyleLabel}>
          {label}
          {required && <Required />}
        </label>
      )}
      <input
        type={type}
        id={id}
        required={required}
        className={`
            ${defaultStyleInput} 
            ${className}
        `}
        {...props}
      />
    </div>
  );
}
