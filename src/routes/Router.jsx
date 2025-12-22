import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import MainDashboard from "../dashboard/MainDashboard";
import PrivateRoute from "./PrivateRoute";
import Profile from "../dashboard/Profile";
import AllBloodDonationRequest from "../dashboard/AllBloodDonationRequest";
import AllUsers from "../dashboard/AllUsers";
import Search from "../components/Search";
import CreateRequest from "../dashboard/CreateRequest";
import MyDonationRequest from "../dashboard/MyDonationRequest";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/search',
                element: <Search />
            }
        ]
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>),
        children: [
            {
                index: true,
                element: <MainDashboard />
            },
            {
                path: '/dashboard/profile',
                element: <Profile />
            },
            {
                path: '/dashboard/create-donation-request',
                element: <CreateRequest />
            },
            {
                path: ' /dashboard/my-donation-requests',
                element: <MyDonationRequest />
            },
            {
                path: '/dashboard/all-users',
                element: <AllUsers />
            },
            {
                path: '/dashboard/all-blood-donation-request',
                element: <AllBloodDonationRequest />
            },


        ]
    }
])