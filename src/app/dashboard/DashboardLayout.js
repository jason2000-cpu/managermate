'use client'

// const { default: SideNav } = require("@/components/SideNav")
import { useSelector } from "react-redux"
import Counter from "@/components/Counter"
import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";
import TopBar from "@/components/TopBar";

function DashboardLayout({children}){
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
}

export default DashboardLayout;