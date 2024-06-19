'use client'

import React from 'react';
import Cal from '@/components/Calendar';
import SideNav from '@/components/SideNav';
import TopBar from '@/components/TopBar';
import useTaskHook from "@/hooks/useTasksHook"

function MyCalendar() {
  const { getUserTasks } = useTaskHook();

  const tasks  = getUserTasks('4');
  return (
    <div>
        <div className="flex">
            <SideNav />
            <div className="w-full">
              <TopBar />
              <Cal events={tasks} />
            </div>
        </div>
    </div>

  );
};

export default MyCalendar;
