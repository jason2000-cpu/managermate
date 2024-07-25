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
        <div className="mx-10">
            <FilterSettings />
            <div className="flex w-full justify-between h-[83vh]">
                <Todos />
                <Inprogress />
                <Completed />
            </div>
        </div>

    )
}

export default Dashboard; 