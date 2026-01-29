import React, { useState } from "react";

export default function Tooltip({ content, children }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      {show && (
        <div
          className="
            absolute z-50 mt-2
            rounded-md border bg-gray-900 px-3 py-1.5
            text-sm text-white shadow-md
            animate-fade-in
          "
        >
          {content}
        </div>
      )}
    </div>
  );
}