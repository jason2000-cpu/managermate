'use client'

import React, { useState } from "react"
import { useSelector } from "react-redux"
import Counter from "@/components/Counter"
import Navbar from "@/components/Navbar";

function Admin(){
    const user = useSelector((state) => state.user);
    // const user = JSON.parse(localStorage.getItem("activeUser"))
    console.log("LOGGED IN USER:::: ", user)

    return (
        <div>
            <div className="pt-20">
                <h1>Active User: {user.username}</h1>
                <Counter />
            </div>
        </div>
    )
}

export default Admin;