export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  children,
  ...props
}) {
  const defaultStyle = `
    font-medium rounded-xl transition-all duration-200 hover:cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
    disabled:opacity-60 disabled:cursor-not-allowed 
    flex items-center justify-center gap-2
  `;

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 active:bg-gray",
    ghost: "text-gray-600 hover:bg-gray-100 active:bg-gray-200",
    danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
    success: "bg-green-600 text-white hover:bg-green-700 active:bg-green-800",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      disabled={disabled}
      className={`
        ${defaultStyle}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
