import { Info } from "lucide-react";

export default function Tooltip({
  text,
  tooltip,
  className = "",
  tooltipPosition,
}) {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };
  return (
    <div
      className={`inline-flex items-center gap-2 group relative ${className}`}
    >
      <span className="text-gray-700">{text}</span>

      <div className="relative flex items-center">
        <Info className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-help transition-colors" />

        <div
          className={`
            absolute ${positionClasses[tooltipPosition]}
            hidden group-hover:block
            bg-gray-900 text-white text-sm 
            px-3 py-2 rounded-xl shadow-lg
            w-64 z-50
            pointer-events-none
          `}
        >
          {tooltip}

          <div
            className={`
              absolute w-2 h-2 bg-gray-900 rotate-45
              ${tooltipPosition === "top" ? "bottom-[-4px] left-1/2 -translate-x-1/2" : ""}
              ${tooltipPosition === "bottom" ? "top-[-4px] left-1/2 -translate-x-1/2" : ""}
              ${tooltipPosition === "left" ? "right-[-4px] top-1/2 -translate-y-1/2" : ""}
              ${tooltipPosition === "right" ? "left-[-4px] top-1/2 -translate-y-1/2" : ""}
            `}
          ></div>
        </div>
      </div>
    </div>
  );
}
