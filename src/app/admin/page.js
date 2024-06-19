'use client'

import TopBar from "@/components/TopBar";
import SideNavigation from "./components/SideNavigation";
import MembersView from "./components/MembersView";

function Admin(){
    return (
        <div>
            <div className="flex">
                <SideNavigation />
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