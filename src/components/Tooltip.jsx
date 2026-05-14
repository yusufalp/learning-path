import { Info } from "lucide-react";

export default function Tooltip({
  text,
  tooltip,
  className = "",
  tooltipPosition = "top",
}) {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const defaultStyleWrapper = `
    inline-flex items-center gap-2 group relative
  `;

  const defaultStyleTooltip = `
    absolute hidden group-hover:block
    bg-gray-900 text-white text-sm 
    px-3 py-2 rounded-xl shadow-lg
    w-64 z-50
    pointer-events-none
  `;

  return (
    <div
      className={`
        ${defaultStyleWrapper} 
        ${className}
      `}
    >
      <span className="text-gray-700">{text}</span>

      <div className="relative flex items-center">
        <Info className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-help transition-colors" />

        <div
          className={`
            ${defaultStyleTooltip}
            ${positionClasses[tooltipPosition]}
          `}
        >
          {tooltip}
        </div>
      </div>
    </div>
  );
}
