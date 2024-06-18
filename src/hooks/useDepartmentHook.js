'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// const baseUrl = "http://localhost:3001";
const baseUrl = "https://managermate-api.vercel.app"

function useDepartmentHook(){
    const [ departments, setDepartments ] = useState([]);
    const [ requestStatus, setRequestStatus ] = useState()

    useEffect(()=>{
        async function getAllDepartments(){
            try {
                const response = await axios.get(`${baseUrl}/departments`)
                setDepartments(response.data)
            } catch (err){
                console.log("An Error Occured While Fetching All Departments", err)
            }
        }
        getAllDepartments();
    }, [departments])


    function generateRandomCode() {
        const uuid = uuidv4();
        const randomCode = uuid.replace(/\D/g, '').slice(0, 4);
        return randomCode.padEnd(4, '0'); 
      }

    function getDate(){
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const dateToday = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        return dateToday
    }

    async function createDepartment(departmentData){
        let newDepartment = {
            ...departmentData,
            id: uuidv4(),
            date_created: getDate(),
            emmployees: [],
            code: generateRandomCode()

        }

        setDepartments([...departments, newDepartment])

        let res = {}
        try {
            const response = await axios.post(`${baseUrl}/departments`, newDepartment);

            if (response === 201){
                res = {status: "Success", message: "Department Created Successfully"}
            }
        } catch(err){
            res = {status: "Failure", message: "An Error Occured While Creating Department"}
        }

        return res;
    }

    async function updateDepartment(id, updatedDepartment){
        setDepartments(departments.map(department => (department.id === id ? updatedDepartment : department)))
        let res = {}

        try {
            const response = await axios.put(`${baseUrl}/departments/${id}`, updatedDepartment)

            if (response.status === 200){
                res = {status: "Success", message: "Department Updated Successfully"}
            }
        } catch(err){
            res = {status: "Failure", message: "An Error Occured While Updating Department"}
        }

        return res

    }

    async function deleteDepartment(departmentId){
        const newDepartments = departments.filter(department => department.id !== departmentId);

        setDepartments(newDepartments);
        try {
            const response = await axios.delete(`${baseUrl}/departments/${departmentId}`)

            if (response == 200){
                res = {status: "Success", message: "Department Deleted Successfuly."}
            }
        } catch(err){
            res = {status: "Failure", message: "An Error Occured While Deleting Department"}
        }
    }


    return {
        departments,
        createDepartment,
        updateDepartment,
        deleteDepartment
    }

}


export default useDepartmentHook;