'use client'

import React, { useState } from "react"
import { useSelector } from "react-redux"
import Counter from "@/components/Counter"
import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";
import TopBar from "@/components/TopBar";
import FilterSettings from "@/components/FilterSettings";
import Todos from "@/components/Todos";
import Inprogress from "@/components/Inprogress";
import Completed from "@/components/Completed";

function Dashboard(){
    // const user = useSelector((state) => state.user);
    const user = JSON.parse(localStorage.getItem("activeUser"))
    console.log("LOGGED IN USER:::: ", user)

    return (
        <div>
            <div className="flex">
                <SideNav />
                {/* <h1>Active User: {user.userType} {user.FName} {user.SName}</h1>
                <Counter /> */}
                <div className="w-full">
                    <TopBar />
                    <FilterSettings />
                    <div className="flex justify-between mx-28 mt-10">
                        <Todos />
                        <Inprogress />
                        <Completed />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;