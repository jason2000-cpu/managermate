'use client'

import React, { useState} from "react"
import Card from "./ui/Card"
import { todos } from "../../data"

function Todos(){
    const inpcompleteTodos = todos.filter((todo) => todo.status === "incomplete")
    return (
        <div className="w-[24rem] h-[80vh] rounded border ">
            <h1 className="text-xl text-white rounded font-bold border flex justify-center items-center bg-[#083778] h-9">Todos</h1>
            <div className="mt-4">
                { inpcompleteTodos.map((todo) =>{
                    return <Card data={todo} />
                })}
            </div>
        </div>
    )
}


export default Todos;