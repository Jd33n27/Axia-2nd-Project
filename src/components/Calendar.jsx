import React from "react";

const Calendar = () => {
  const today = new Date();
  const currentMonth = today.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Mock upcoming events
  const upcomingEvents = [
    { date: "2025-09-08", title: "Math assignments Due", type: "assignments" },
    { date: "2025-09-12", title: "Science Quiz", type: "quiz" },
    { date: "2025-09-15", title: "History Project", type: "project" },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">{currentMonth}</h3>

      {/* Mini Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 text-xs mb-4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-medium text-gray-600 p-1">
            {day}
          </div>
        ))}

        {/* Sample calendar days */}
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i + 1}
            className={`text-center p-1 rounded ${
              i + 1 === today.getDate()
                ? "bg-indigo-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div>
        <h4 className="font-medium text-sm mb-2">Upcoming Events</h4>
        <div className="space-y-2">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="flex items-center space-x-2 text-xs">
              <div
                className={`w-2 h-2 rounded-full ${
                  event.type === "assignments"
                    ? "bg-red-400"
                    : event.type === "quiz"
                    ? "bg-yellow-400"
                    : "bg-green-400"
                }`}
              ></div>
              <span className="text-gray-600">
                {new Date(event.date).toLocaleDateString()}
              </span>
              <span>{event.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;

// // Simple Calendar Component
// const Calendar = () => {
//   const today = new Date();
// };
