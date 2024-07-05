
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopBar from "@/components/TopBar";
import SideNavigation from "./components/SideNavigation";

function AdminLayout({ children }){
    return (
        <>
        <div className="flex">
            <SideNavigation />
            <div className="w-full">
            <TopBar />
                { children }
            </div>
        </div>
        <ToastContainer 
                position='top-right'
                theme='dark'
            />
        </>
    )
}

export default AdminLayout;