'use client'

import React, { useState} from "react"
import { todos } from "../../data"
import Card from "./ui/Card"

function Completed(){
    const completeTodos = todos.filter((todo) => todo.status === "complete")
    return (
        <div className="w-[24rem] h-[80vh] rounded border ">
            <h1 className="text-xl text-white rounded font-bold border flex justify-center items-center bg-[#083778] h-9">Completed</h1>
            <div className="mt-4">
                { completeTodos.map((todo) =>{
                    return <Card data={todo} />
                })}
            </div>
        </div>
    )
}


export default Completed;