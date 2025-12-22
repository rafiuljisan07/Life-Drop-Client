import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import useAxiosSecure from '../hooks/useAxiosSecure';

const AllUsers = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/users')
            .then(res => {
                setUsers(res.data);
            })
    }, [axiosSecure]);


    return (
        <div>
           
        </div>
    );
};

export default AllUsers;