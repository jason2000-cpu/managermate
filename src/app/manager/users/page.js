'use client'

import React, { useState } from 'react'
import UsersTable from './components/usersTable';
import useUserHook from '@/hooks/useUserHook';
import PageTitle from '@/components/ui/PageTitle';
import Filter from '../components/Filter';
import useDepartmentHook from '@/hooks/useDepartmentHook';

function UsersPage(){
    const { users } = useUserHook();
    const [ filter, setFilter ] = useState('All');
    const { departments } = useDepartmentHook();

    const emmployees = users.filter(user => user.userType === 'user');
    let filterOptions =['All']

    for (let department of departments.values()) {
        console.log("HELLO")
        console.log("DEPARTMENT ONE BY ONE::",  department.name)
        filterOptions = [...filterOptions, department.name]
    }
    
    const filteredEmployees = filter === 'All' ? emmployees : emmployees.filter(employee => employee.department === filter)

    const handleFilterChange=(e) => {
        setFilter(e.target.value)
    }

    return (
        <>
            <div className="mx-10 mt-4 space-y-5">
                <PageTitle title={'Users'} />
                <Filter filterOptions={filterOptions} filter={filter} handleChange={handleFilterChange} />
                <UsersTable data={filteredEmployees} />
            </div>
        </>
    )
}

export default UsersPage;
