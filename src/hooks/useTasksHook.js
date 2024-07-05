'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


const baseUrl = "http://localhost:3001"
// const baseUrl = "https://managermate-api.vercel.app"

function useTaskHook(){
    const [ tasks, setTasks ] = useState([]);
    const [ loading, setIsLoading ] = useState(true);
    const [error, setError] = useState('');


    useEffect(()=>{
        async function getAllTasks(){
            try {
                const response = await axios.get(`${baseUrl}/tasks`)
                setTasks(response.data)
                setIsLoading(false);
            } catch(err){
                setError(err);
            }
        }
        
        getAllTasks();
    }, [tasks])


    async function getTasks(userId){
        let res = {}
        setIsLoading(true)
        try {
            const response = await axios.get(`${baseUrl}/tasks/${userId}`)
            res = {status: 'Success', message: response.data}
            setIsLoading(false);
        } catch (err){
            setError(err);
            res = {status: "Failure", message: "An Error Occured While Fetchig User Tasks"}
            setIsLoading(false);
        }
        
        return res;
    }

    function getUserTasks(userId){
        const userTasks = tasks.filter(task => task.assigned_to === userId)
        return userTasks;
    }

    async function updateTask(id, updatedTask){
        setTasks(tasks.map(task => (task.id === id ? updatedTask : task)))

        let res = {}
         try {
            const response = await axios.patch(`${baseUrl}/tasks/${id}`, updatedTask);
            if (response.status === 200){
                res = {status: "Success", message: updatedTask }
            }
         } catch(err){
            setError(err);
            res = {status: "Failure", message: "An Error Occured While Updating Task"}
         }

         return res;
    }

    async function createTask(taskData){
        let res = {};
        const newTask = {
            ...taskData,
            id: uuidv4(),
            assigned_to: null,
            assigned_by: null,
            color: "#f56954",
            status: "incomplete"
        }
        console.log("TASKS LENGTH BEFORE ADDING:::", tasks.length )
        setTasks([...tasks, newTask])
        console.log("TASKS LENGTH AFTER ADDING", tasks.length)

        try{
            const response = await axios.post(`${baseUrl}/tasks`, newTask)
            if (response.status === 201){
                res = {status: "Success", message: response.data}
            }
        } catch(err){
            res = {status: "Failure", message: "Error While Creating The Task"}
        }

        return res;
    }

    async function deleteTask(taskId){
        let res = {}

        let newTasks = tasks.filter((task) => task.id !== taskId)
        setTasks(newTasks);
        console.log("Tasks After Deleting::::", newTasks)
        try {
            const response = await axios.delete(`${baseUrl}/tasks/${taskId}`)

            if (response.status === 200) {
                res = {status: "Success", message: 'Task Deleted Successfully'}
            }
        } catch (err){
            setError(err);
            res = {status: "Failure", message: 'Error While Deleting the Task'}
        }

        return res;
    }


    return {
        loading,
        tasks,
        getTasks,
        updateTask,
        createTask,
        deleteTask,
        getUserTasks
    }
}


export default useTaskHook;