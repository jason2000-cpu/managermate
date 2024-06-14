'use client'

import React, { useState} from "react"
import { todos } from "../../data"
import Card from "./ui/Card"

function Inprogress(){
    const inprogressTodos = todos.filter((todo) => todo.status === "inprogress")
    return (
        <div className="w-[24rem] h-[80vh] rounded border ">
            <h1 className="text-xl text-white rounded font-bold border flex justify-center bg-[#083778]">In progress</h1>
            <div className="mt-4">
                { inprogressTodos.map((todo, key) =>{
                    return <Card key={key} data={todo} />
                })}
            </div>
        </div>
    )
}


export default Inprogress;