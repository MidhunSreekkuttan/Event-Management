import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

const ResizablePanelGroup = ({ className = "", ...props }) => {
  return (
    <ResizablePrimitive.PanelGroup
      className={`flex h-full w-full ${
        props.direction === "vertical" ? "flex-col" : ""
      } ${className}`}
      {...props}
    />
  );
};

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({ withHandle = false, className = "", ...props }) => {
  return (
    <ResizablePrimitive.PanelResizeHandle
      className={`relative flex w-px items-center justify-center bg-border ${
        props.direction === "vertical" ? "h-px w-full" : ""
      } ${className}`}
      {...props}
    >
      {withHandle && (
        <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
          <GripVertical className="h-2.5 w-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  );
};

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
