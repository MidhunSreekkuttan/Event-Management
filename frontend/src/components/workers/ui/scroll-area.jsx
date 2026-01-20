import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

const ScrollArea = React.forwardRef(function ScrollArea(
  { className = "", children, ...props },
  ref
) {
  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});

const ScrollBar = React.forwardRef(function ScrollBar(
  { className = "", orientation = "vertical", ...props },
  ref
) {
  const orientationClass =
    orientation === "vertical"
      ? "h-full w-2.5 border-l border-l-transparent p-[1px]"
      : "h-2.5 flex-col border-t border-t-transparent p-[1px]";

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={`flex touch-none select-none transition-colors ${orientationClass} ${className}`}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
});

export { ScrollArea, ScrollBar };
