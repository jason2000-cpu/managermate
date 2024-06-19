'use client'

import SideNav from "@/components/SideNav";
import TopBar from "@/components/TopBar";

function DashboardLayout({children}){
    <div>
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
    </div>
}

export default DashboardLayout;