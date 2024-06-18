'use client'

import React, { useState } from "react"
import { useSelector } from "react-redux"
import Counter from "@/components/Counter"
import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";
import TopBar from "@/components/TopBar";
import SideNavigation from "./components/SideNavigation";
import MembersView from "./components/MembersView";
function Admin(){
    const user = useSelector((state) => state.user);
    // const user = JSON.parse(localStorage.getItem("activeUser"))
    console.log("LOGGED IN USER:::: ", user)

    return (
        <div>
            <div className="flex">
                <SideNavigation />
                {/* <h1>Active User: {user.userType} {user.FName} {user.SName}</h1>
                <Counter /> */}
                <div className="w-full">
                <TopBar />
                <div className="p-6">
                    <MembersView />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;