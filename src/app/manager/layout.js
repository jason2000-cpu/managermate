
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideNavigation from './components/SideNavigation';
import TopBar from '@/components/TopBar';

function ManagerLayout({ children }){
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
                position="top-right"
                theme="dark"
            />
        </>
    )
}

export default ManagerLayout;
