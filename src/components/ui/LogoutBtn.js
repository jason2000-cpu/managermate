'use client'

import { useRouter } from "next/navigation"
import { useAppSelector } from "@/lib/hooks"
import { logoutDispatch } from "@/lib/features/user/userSlice"
import { useDispatch } from "react-redux"
import { LuLogOut } from "react-icons/lu";

function LogoutBtn(){
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = ()=>{
        dispatch(logoutDispatch)
        router.push("/auth/login")
    }
    return (
        <button onClick={handleLogout} className="items-center flex mx-6 my-4 space-x-2">
            <span className="text-xl">Logout</span>
            <LuLogOut size={20} />
        </button>
    )
}

export default LogoutBtn;