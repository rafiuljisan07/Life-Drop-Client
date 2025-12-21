import React from 'react';
import { Outlet } from 'react-router';
import Aside from '../components/Aside';

const DashboardLayout = () => {
    return (
        <div className='flex space-x-2'>
            <Aside />
            <div className='flex-1 ml-10 md:ml-4'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;