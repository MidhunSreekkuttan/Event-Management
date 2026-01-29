import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";

/* ======================
   COMMAND DIALOG
====================== */

const CommandDialog = ({ open, onClose, items = [], onSelect }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!open) setQuery("");
  }, [open]);

  if (!open) return null;

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
        
        {/* Header */}
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            autoFocus
            placeholder="Type a command..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm outline-none"
          />
          <button onClick={onClose}>
            <X className="h-4 w-4 text-gray-400" />
          </button>
        </div>

        {/* List */}
        <div className="max-h-72 overflow-y-auto">
          {filteredItems.length === 0 && (
            <p className="py-6 text-center text-sm text-gray-500">
              No results found
            </p>
          )}

          {filteredItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onSelect(item);
                onClose();
              }}
              className="flex w-full items-center px-4 py-3 text-sm hover:bg-gray-100"
            >
              {item.label}
              {item.shortcut && (
                <span className="ml-auto text-xs text-gray-400">
                  {item.shortcut}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandDialog;
