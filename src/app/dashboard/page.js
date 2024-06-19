'use client'

import React from "react"
import FilterSettings from "@/components/FilterSettings";
import Todos from "@/components/Todos";
import Inprogress from "@/components/Inprogress";
import Completed from "@/components/Completed";

import SideNav from "@/components/SideNav";
import TopBar from "@/components/TopBar";

function Dashboard(){
    return (
        <div className="flex">
            <SideNav />
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

    )
}

export default Dashboard; 