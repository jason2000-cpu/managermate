'use client'

import React, { useState} from "react"
import Image from "next/image"
import Card from "./ui/Card"
import useTaskHook from "@/hooks/useTasksHook"

function Inprogress(){
    const { getUserTasks } = useTaskHook();
    // const user = JSON.parse(localStorage.getItem("activeUser"));

    const tasks  = getUserTasks("4");

    const inprogressTasks = tasks.filter((task) => task.status === "inprogress")
    return (
        <div className="w-[24rem] h-[82vh]">
            <h1 className="text-xl text-white rounded font-bold  flex justify-center bg-[#083778]">In progress</h1>
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