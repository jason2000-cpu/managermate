'use client'

import React, { useState} from "react"
import Image from "next/image"
import { useAppSelector } from "@/lib/hooks"
import { selectUser } from "@/lib/features/user/userSlice"
import Card from "./ui/Card"
import useTaskHook from "@/hooks/useTasksHook"

function Inprogress(){
    const { getUserTasks } = useTaskHook();
    const user = useAppSelector(selectUser);

    const tasks  = getUserTasks(user.id);

    const inprogressTasks = tasks.filter((task) => task.status === "inprogress")
    return (
        <div className="w-[24rem] h-[82vh]">
            <h1 className="text-xl text-white rounded font-bold border flex justify-center items-center bg-[#083778] h-9 dark:border-none">In Progress</h1>
            <div className="hide-scrollbar overflow-auto h-[78vh] pt-4">
            { inprogressTasks.length <= 0 ? (
                    <div className="flex flex-col justify-center  items-center h-96">
                        <Image src={"/static/images/empty.jpg"} alt="Empty Tasks" width={300} height={300} />
                        <span>Empty</span>
                    </div>
                ) : (
                        inprogressTasks.map((task, key) =>{
                        return <Card key={key} data={task} />
                    })
                )}
            </div>
        </div>
    )
}


export default Inprogress;