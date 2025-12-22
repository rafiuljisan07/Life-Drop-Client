import React from 'react';
import { Outlet } from 'react-router';
import Aside from '../components/Aside';

const DashboardLayout = () => {
    return (
        <div>
            <Aside />
            <div className='mt-10 sm:ml-0 md:ml-72 '>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;