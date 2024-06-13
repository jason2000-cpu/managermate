'use client'

import React, { useState } from "react"
import { useSelector } from "react-redux"
import Counter from "@/components/Counter"
import Navbar from "@/components/Navbar";

function Dashboard(){
    // const user = useSelector((state) => state.user);
    const user = JSON.parse(localStorage.getItem("activeUser"))
    console.log("LOGGED IN USER:::: ", user)

    return (
        <div>
            <div className="pt-20">
                <h1>Active User: {user.userType} {user.FName} {user.SName}</h1>
                <Counter />
            </div>
        </div>
    )
}

export default Dashboard;