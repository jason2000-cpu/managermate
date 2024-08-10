'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const baseUrl = "http://localhost:3000/api/";
// const baseUrl = "https://managermate-api.vercel.app"

function useDepartmentHook() {
    const [departments, setDepartments] = useState([]);
    const [requestStatus, setRequestStatus] = useState();
    const [signal, setSignal] = useState(false)


    useEffect(() => {
        async function getAllDepartments() {
            try {
                const response = await axios.get(`${baseUrl}/departments`);
                console.log("RESPONSE FROM HOOK:::", response);
                setDepartments(response.data);
            } catch (err) {
                console.log("An Error Occurred While Fetching All Departments", err);
            }
        }
        getAllDepartments();
        alert("new Department Added")
    }, [signal]);

    function generateRandomCode() {
        const uuid = uuidv4();
        const randomCode = uuid.replace(/\D/g, '').slice(0, 4);
        return randomCode.padEnd(4, '0');
    }

    function getDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const dateToday = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return dateToday;
    }

    async function createDepartment(departmentData) {
        let newDepartment = {
            ...departmentData,
            date_created: getDate(),
            department_code: generateRandomCode()
        };

        setDepartments(prevDepartments => [...prevDepartments, newDepartment]);
        let res = {};
        try {
            const response = await axios.post(`${baseUrl}/departments`, newDepartment);
            if (response.status === 201) {
                setSignal(true)
                res = { status: "Success", message: "Department Created Successfully" };
            }
        } catch (err) {
            res = { status: "Failure", message: "An Error Occurred While Creating Department" };
        }

        return res;
    }

    async function updateDepartment(id, updatedDepartment) {
        let res = {};
        try {
            const response = await axios.put(`${baseUrl}/departments/${id}`, updatedDepartment);

            if (response.status === 200) {
                setDepartments(prevDepartments => prevDepartments.map(department => 
                    department.id === id ? response.data : department
                ));
                res = { status: "Success", message: "Department Updated Successfully" };
            }
        } catch (err) {
            res = { status: "Failure", message: "An Error Occurred While Updating Department" };
        }

        return res;
    }

    async function deleteDepartment(departmentDet) {
        let res = {};
        try {
            const response = await axios.delete(`${baseUrl}/departments/${departmentDet.id}`);
            console.log("RESPONSE ON DELETE::::", response);
            if (response.status === 200) {
                setDepartments(prevDepartments => prevDepartments.filter(department => department.id !== departmentDet.id));
                res = { status: "Success", message: "Department Deleted Successfully." };
            }
        } catch (err) {
            res = { status: "Failure", message: "An Error Occurred While Deleting Department" };
        }

        return res;
    }

    return {
        departments,
        createDepartment,
        updateDepartment,
        deleteDepartment
    };
}

export default useDepartmentHook;