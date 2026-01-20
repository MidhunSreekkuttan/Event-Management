import {
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

/* =======================
   CHART CONTAINER
======================= */

const ChartContainer = ({ className = "", children }) => {
  return (
    <div
      className={`w-full aspect-video text-xs ${className}`}
    >
      <ResponsiveContainer>
        {children}
      </ResponsiveContainer>
    </div>
  );
};

/* =======================
   TOOLTIP CONTENT
======================= */

const ChartTooltipContent = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-md border bg-white px-3 py-2 shadow text-xs">
      <p className="font-medium mb-1">{label}</p>

      <div className="space-y-1">
        {payload.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-gray-600">
                {item.name}
              </span>
            </div>

            <span className="font-medium text-gray-800">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* =======================
   LEGEND CONTENT
======================= */

const ChartLegendContent = ({ payload }) => {
  if (!payload || !payload.length) return null;

  return (
    <div className="flex justify-center gap-4 pt-3">
      {payload.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-xs"
        >
          <span
            className="h-2 w-2 rounded-sm"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-gray-600">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};

/* =======================
   EXPORTS
======================= */

export {
  ChartContainer,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
  ChartTooltipContent,
  ChartLegendContent,
};