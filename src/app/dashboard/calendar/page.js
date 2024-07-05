'use client'

import React from 'react';
import { useAppSelector } from '@/lib/hooks';
import { selectUser } from '@/lib/features/user/userSlice';
import Cal from '@/components/Calendar';
import useTaskHook from "@/hooks/useTasksHook"

function MyCalendar() {
  const { getUserTasks } = useTaskHook();
  const user = useAppSelector(selectUser);

  const tasks  = getUserTasks(user.id);
  return (
    <div>
      <Cal events={tasks} />
    </div>

  );
};

export default MyCalendar;
