import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MainDashboard = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [myDonationRequests, setMyDonationRequests] = useState([]);


    useEffect(() => {
        axiosSecure.get(`/my-donation-requests/${user?.email}`)
            .then(res => 
                console.log(res.data)
                
            )
    }, [axiosSecure, user]);


    return (
        <div>

        </div>
    );
};

export default MainDashboard;