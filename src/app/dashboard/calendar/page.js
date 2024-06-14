// src/App.js
import React from 'react';
import Cal from '@/components/Calendar';
import SideNav from '@/components/SideNav';
import TopBar from '@/components/TopBar';
import { todos as events } from '../../../../data';

function MyCalendar() {
  // const events = [
  //   {
  //     title: 'Todo 1',
  //     start: "2024-06-13",
  //     end: "2024-06-18",
  //     color: '#f56954',
  //     description: 'Details about Todo 1',
  //   },
  //   {
  //     title: 'Todo 2',
  //     start: new Date(2024, 5, 10),
  //     end: new Date(2024, 5, 12),
  //     color: '#f39c12',
  //     description: 'Details about Todo 2',
  //   },
  //   {
  //     title: 'Todo 3',
  //     start: new Date(2024, 5, 19),
  //     end: new Date(2024, 5, 22),
  //     color: '#00a65a',
  //     description: 'Details about Todo 3',
  //   },
  // ];

  return (
    <div>
        <div className="flex">
            <SideNav />
            {/* <h1>Active User: {user.userType} {user.FName} {user.SName}</h1>
            <Counter /> */}
            <div className="w-full">
              <TopBar />
              <Cal events={events} />
            </div>
        </div>
    </div>

  );
};

export default MyCalendar;
