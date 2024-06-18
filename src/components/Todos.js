'use client'

import React, { useState} from "react"
import Image from 'next/image'
import Card from "./ui/Card"
import { todos } from "../../data"
import useTaskHook from "@/hooks/useTasksHook"

function Todos(){
    // const [todos, setTodos] = useState([])
    const { getUserTasks } = useTaskHook();
    const user = JSON.parse(localStorage.getItem("activeUser"));

    const tasks  = getUserTasks(user.id);

    const incompleteTasks = tasks.filter((task) => task.status === "incomplete")
    return (
        <div className="w-[24rem] h-[82vh]">
            <h1 className="text-xl text-white rounded font-bold border flex justify-center items-center bg-[#083778] h-9">Todos</h1>
            <div className="hide-scrollbar overflow-auto h-[78vh] pt-4">
            { incompleteTasks.length <= 0 ? (
                    <div className="flex justify-center items-center h-96">
                        <Image src={"/static/images/empty.jpg"} alt="Empty Tasks" width={300} height={300} />
                        <span>Empty</span>
                    </div>
                ) : (
                        incompleteTasks.map((task, key) =>{
                        return <Card key={key} data={task} />
                    })
                )}
            </div>
        </div>
    )
}


export default Todos;