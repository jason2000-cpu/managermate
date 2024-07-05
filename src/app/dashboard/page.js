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
        <div>
            <FilterSettings />
            <div className="flex space-x-40 mx-10 h-[83vh]">
                <Todos />
                <Inprogress />
                <Completed />
            </div>
        </div>

    )
}

export default Dashboard; 