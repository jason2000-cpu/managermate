'use client'

import React, { useState , useEffect } from "react"
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

import { users as usersData } from "../../data";
import { useDispatch } from "react-redux";


const baseUrl = "http://localhost:3000/api/"

// const baseUrl = "https://managermate-api.vercel.app"

function useUserHook (){
    const [ users, setUsers ] = useState([]);

    let original_users = [...users]

    useEffect(()=>{
        async function fetchUsers(){
            try {
                const response = await axios.get(`${baseUrl}/users`)
                setUsers(response.data);
            } catch (err){
                console.log(err)
            }
        }

        fetchUsers();
    },[])

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

    async function register(formData){
        const newUser = {
            ...formData,
            id: uuidv4(),
            userType: "user",
            assignedTask: false ,
            department : "IT",

        }
        let res = {};

        try {
            setUsers({...users, newUser});
            const response = await axios.post(`${baseUrl}/users`, newUser)

            if (response.status === 201){
                res = {status: "Success", message: newUser}
            }
        } catch (error) {
            res = {status: "Failure", message: error}
        }

        return res;
    }

    async function updateUser(id, updatedUser){
        setUsers(users.map(user => (user.id === id ? updatedUser: user)))

        let res = {}
        try {
            const resp = await axios.put(`${baseUrl}/users/${id}`, updatedUser)
            if (resp.status === 200){
                res = {status: "Success", message: "Profile Updated Successfully"}
            }
        } catch(err){
            res = {status: "Failure", message: "An Error Occured While Updating Profile"}
        }

        return  res;
    }

    async function deleteUser(userId){
        setUsers(users.map(user => user.id !== userId))
        console.log("USER TO DELETE ::::", userId)
        let res = {}
        try {
            const response = await axios.delete(`${baseUrl}/users/${userId}`)
            
            if (response.status === 200){
                res = {status: "Success",  message: "User Deleted Successfully"}
            }

        } catch (err){
            res = {status: "Failure", message: "An Error Occured While Deleting User"}
        }

        return res;
    }
    return {
        users,
        getUser,
        login,
        register,
        updateUser,
        deleteUser
    }

}

export default useUserHook;