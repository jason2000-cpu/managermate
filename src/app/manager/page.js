'use client'

import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TaskModal from './components/modals/TaskModal';
import useTaskHook from '@/hooks/useTasksHook';
import TasksTable from './components/tabels/TasksTable';
import PageTitle from '@/components/ui/PageTitle';
import Filter from './components/Filter';


function ManagersPage(){
    const [isTaskModalOpen, setTaskModalOpen ]  = useState(false);
    const [filter, setFilter] = useState('all');
    const { tasks }  = useTaskHook();

    const filterOptions = ['all', 'inprogress', 'complete'];


    const handleActionClick = (task) => {
        console.log('Action clicked for task:', task);
      };

    const handleChange = (e) =>{
        setFilter(e.target.value)
    }
    const filteredTasks = filter !== 'all' ? tasks.filter(task =>  task.status === filter) : tasks 
  
    const handleOpenModal = () => {
        setTaskModalOpen(true)
    };
  
    const handleCloseModal = () => {
      setTaskModalOpen(false);
    };
  
    return (
        <>
            <div className="mx-20 mt-4">
                <PageTitle title={'Tasks'} />
                <div className='flex justify-between items-center  w-full'>
                    <Filter filter={filter} handleChange={handleChange} filterOptions={filterOptions} />
                    <div className=''>
                        <button onClick={()=>handleOpenModal('task')} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                            Create New Task
                        </button>
                        <TaskModal isOpen={isTaskModalOpen} handleCloseModal={handleCloseModal} toast={toast} />
                    </div>
                </div>
            </div>
            <div className=' mx-4'>
                <div className="p-6">
                    <TasksTable data={filteredTasks} onActionClick={handleActionClick} />
                </div>
            </div>
        </>
    )
}

export default ManagersPage;