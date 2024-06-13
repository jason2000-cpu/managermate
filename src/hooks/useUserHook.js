'use client'

import React, { useState , useEffect } from "react"

import { users as usersData } from "../../data";
import { useDispatch } from "react-redux";

function useUserHook (){
    const [ users, setUsers ] = useState([]);
    useEffect(()=>{
        async function fetchUsers(){
            try {
                setUsers(usersData);
            } catch (err){
                console.log(err)
            }
        }

        fetchUsers();
    },[usersData])

    function getUser(id){
        const user = users.find((user) => user.id === id)
        let res = {}

        if (!user){
            res = {status: "Failure", message: "User Not Found"}
            return res
        }

        res = {status: "Success", message: user}
        return res;
    }

    function login(formData){
        const user = users.find((user) => user.FName === formData.username && user.password === formData.password)
        let res = {}

        if (!user){
            res = {status: "Failure", message: "User Not Found Check Your Username or Email"}
            return res;
        }

        res = {status: "Success", message: user}
        return res;
    }

    function register(formData){
        const newUser = {
            ...formData,
            id: "123JM",
            userType: "user"
        }
        let res = {};

        try {
            setUsers({...users, newUser});
            res = {status: "Success", message: newUser}
        } catch (error) {
            res = {status: "Failure", message: error}
        }

        return res;
    }

    return {
        getUser,
        login,
        register
    }

}

export default useUserHook;