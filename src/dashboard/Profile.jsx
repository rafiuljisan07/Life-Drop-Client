import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const [userData, setUserData] = useState();
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        axiosSecure.get(`/users/${user?.email}`)
            .then(res => {
                setUserData(res.data)
            })
    }, [axiosSecure, user])

    return (
        <div>
            <div className="max-w-2xl mx-auto p-6">
                {/* Header with Edit/Save Button */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Profile</h1>
                    {!isEditing ? (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Edit
                        </button>
                    ) : (
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                        >
                            Save
                        </button>
                    )}
                </div>

                {/* Profile Form */}
                <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
                    {/* Avatar */}
                    <div className="flex justify-center mb-6">
                        <img
                            src={userData?.photoURL}
                            alt="Avatar"
                            className="w-24 h-24 rounded-full border-2 border-gray-300"
                        />
                    </div>

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Requester Name</label>
                        <input
                            type="text"
                            name='requesterName'
                            value={user?.displayName}
                            disabled={!isEditing}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-red-50"
                        />
                    </div>

                    {/* Email (Non-editable) */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            value={userData?.email}
                            disabled
                            className="w-full px-4 py-2 bg-red-50 text-gray-700 rounded-lg border border-gray-300 focus:outline-none" />
                    </div>

                    {/* Blood Group */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Blood Group</label>
                        <input
                            type="text"
                            value={userData?.bloodGroup}
                            disabled={!isEditing}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-red-50"
                        />
                    </div>

                    {/* District */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">District</label>
                        <input
                            type="text"
                            value={userData?.district}
                            disabled={!isEditing}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-red-50"
                        />
                    </div>

                    {/* Upazila */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Upazila</label>
                        <input
                            type="text"
                            value={userData?.upazila}
                            disabled={!isEditing}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-red-50"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Address</label>
                        <textarea
                            disabled={!isEditing}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-red-50"
                            rows="3"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;