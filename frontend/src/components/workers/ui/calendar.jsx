import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendar = ({
  className = "",
  showOutsideDays = true,
  ...props
}) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={`p-3 ${className}`}
      classNames={{
        months: "flex flex-col sm:flex-row gap-4",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button:
          "h-7 w-7 bg-transparent border rounded hover:bg-gray-100 flex items-center justify-center",
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse",
        head_row: "flex",
        head_cell:
          "w-9 text-center text-xs font-normal text-gray-500",
        row: "flex w-full mt-2",
        cell:
          "h-9 w-9 text-center text-sm relative",
        day:
          "h-9 w-9 rounded hover:bg-gray-100",
        day_selected:
          "bg-blue-600 text-white hover:bg-blue-700",
        day_today:
          "bg-gray-200",
        day_outside:
          "text-gray-400 opacity-50",
        day_disabled:
          "text-gray-400 opacity-50",
        day_range_middle:
          "bg-blue-100 text-blue-700",
        day_hidden:
          "invisible",
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
};

export default Calendar;
