"use client";

import React, { useState } from "react";
import ScheduleALesson from "./main-dashboard/ScheduleALesson";
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";

const DashboardHeader = () => {
  console.log("Component Rendered");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();


  // Exclude paths "/dashboard/my-students" and "/dashboard/my-stats"
  const shouldShowScheduleButton = pathname === "/student";


  console.log("Pathname:", pathname, "Show Schedule Button:", shouldShowScheduleButton);



  return (
    <>
      {isModalOpen && <ScheduleALesson onClose={() => setIsModalOpen(false)} />}


      <div className="flex justify-between items-center mt-3 w-full">
        <div className="text-xl lg:text-2xl ">
          Good Morning, <span className="font-bold">Samantha</span> 😃
        </div>
        <div className="flex items-center gap-4 ">
          {shouldShowScheduleButton && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#42ABD1] text-white px-6 py-3 rounded-md"
            >
              Schedule a Lesson
            </button>
          )}
          <Bell className="text-gray-600" />
        </div>
      </div>



    </>
  );
};

export default DashboardHeader;
