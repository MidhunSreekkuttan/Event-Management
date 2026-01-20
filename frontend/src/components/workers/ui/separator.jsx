import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

const Separator = React.forwardRef(function Separator(
  { className = "", orientation = "horizontal", decorative = true, ...props },
  ref
) {
  const orientationClass =
    orientation === "horizontal"
      ? "h-[1px] w-full"
      : "h-full w-[1px]";

  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={`shrink-0 bg-border ${orientationClass} ${className}`}
      {...props}
    />
  );
});

export { Separator };
