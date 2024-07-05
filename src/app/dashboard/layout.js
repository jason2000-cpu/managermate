'use client'

import SideNav from "@/components/SideNav";
import TopBar from "@/components/TopBar";


function DashboardLayout({children}){
    return (
        <div className="flex">
            <SideNav />
            <div className="w-full space-y-6">
                <TopBar />
                { children }
            </div>
        </div>
    )
}

export default DashboardLayout;