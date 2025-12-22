import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { GiHamburgerMenu } from 'react-icons/gi';

const AllUsers = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const axiosSecure = useAxiosSecure();

    const fetchData = () => {
        axiosSecure.get('/users')
            .then(res => {
                setUsers(res.data);
            })
    }

    useEffect(() => {
       fetchData()
    }, []);

    const handleStatusChange = (email, status) => {
        axiosSecure.patch(`/update/user/status?email=${email}&status=${status}`)
            .then(res => {
                console.log(res.data);
                fetchData()
            })
    }

    return (
        <div>
            <div className="overflow-x-auto p-2">
                <h2 className="text-2xl font-bold mb-4">All Users</h2>
                <table className="w-full border border-red-300 rounded-2xl overflow-hidden shadow-lg">
                    <thead className="bg-red-500 text-white">
                        <tr>
                            <th className="border border-red-300 p-2 text-left">User Image</th>
                            <th className="border border-red-300 p-2 text-left">Name</th>
                            <th className="border border-red-300 p-2 text-left">Email</th>
                            <th className="border border-red-300 p-2 text-left">Role</th>
                            <th className="border border-red-300 p-2 text-left">Status</th>
                            <th className="border border-red-300 p-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(u => (
                            <tr key={u._id} className="hover:bg-red-100">
                                <td className="border border-red-300 p-2">
                                    <img src={u.photoURL} alt={u.name} className="w-10 h-10 rounded-full" />
                                </td>
                                <td className="border border-red-300 p-2">{u.name}</td>
                                <td className="border border-red-300 p-2">{u.email}</td>
                                <td className="border border-red-300 p-2">{u.role}</td>
                                <td className="border border-red-300 p-2">
                                    <span className={`px-2 py-1 rounded text-md font-medium shadow ${u.status === 'active' ? 'bg-green-500' : 'bg-red-600 text-white'}`}>
                                        {u.status}
                                    </span>
                                </td>
                                <td className="border border-red-300 p-2 relative group">
                                    <button className="text-red-600 hover:text-gray-800 font-bold"><GiHamburgerMenu /></button>
                                    <div className="hidden group-hover:block absolute left--10 bottom-0 bg-white border border-red-300 rounded shadow-lg z-10 w-30 text-xs ">
                                        {
                                            u?.status == 'active' ?
                                                <button
                                                    onClick={() => handleStatusChange(u?.email, 'blocked')}
                                                    className="block btn btn-xs btn-error btn-soft w-full">Block</button>
                                                :
                                                <button
                                                    onClick={() => handleStatusChange(u?.email, 'active')}
                                                    className="block btn btn-xs btn-info btn-soft w-full">Unblock</button>
                                        }
                                        <button className="block w-full text-left px-4 py-1 hover:bg-gray-100">Make Volunteer</button>
                                        <button className="block w-full text-left px-4 py-1 hover:bg-gray-100">Make Admin</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;