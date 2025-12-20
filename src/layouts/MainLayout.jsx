import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            MainLayout
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;