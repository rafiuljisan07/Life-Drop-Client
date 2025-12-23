import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const [userData, setUserData] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    // Load user data
    useEffect(() => {
        if (user?.email) {
            axiosSecure.get(`/users/${user.email}`)
                .then(res => setUserData(res.data))
                .catch(err => console.log(err));
        }
    }, [user, axiosSecure]);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
    };

    // Handle save
    const handleSave = (e) => {
        e.preventDefault();
        const updatedData = {
            name: userData.name,
            bloodGroup: userData.bloodGroup,
            district: userData.district,
            upazila: userData.upazila
        };

        axiosSecure.patch(`/users/profile?email=${user?.email}`, updatedData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setIsEditing(false);
                    Swal.fire({
                        icon: "success",
                        title: "Profile Updated",
                        text: "Changes saved successfully",
                        timer: 1500,
                        showConfirmButton: false
                    });
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Profile</h1>
                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Edit
                    </button>
                )}
            </div>

            {/* Profile Form */}
            <form onSubmit={handleSave} className="bg-white shadow-md rounded-lg p-6 space-y-4">
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                    <img
                        src={userData.photoURL || user?.photoURL}
                        alt="Avatar"
                        className="w-40 h-40 rounded-full border-2 border-red-300"
                    />
                </div>

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name || ""}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 disabled:bg-red-50"
                    />
                </div>

                {/* Email (Non-editable) */}
                <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                        type="email"
                        value={userData.email || ""}
                        disabled
                        className="w-full px-4 py-2 bg-red-50 text-gray-700 rounded-lg border border-gray-300"
                    />
                </div>

                {/* Blood Group */}
                <div>
                    <label className="block text-sm font-medium mb-2">Blood Group</label>
                    <input
                        type="text"
                        name="bloodGroup"
                        value={userData.bloodGroup || ""}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 disabled:bg-red-50"
                    />
                </div>

                {/* District */}
                <div>
                    <label className="block text-sm font-medium mb-2">District</label>
                    <input
                        type="text"
                        name="district"
                        value={userData.district || ""}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 disabled:bg-red-50"
                    />
                </div>

                {/* Upazila */}
                <div>
                    <label className="block text-sm font-medium mb-2">Upazila</label>
                    <input
                        type="text"
                        name="upazila"
                        value={userData.upazila || ""}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 disabled:bg-red-50"
                    />
                </div>

                {/* Save Button */}
                {isEditing && (
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                    >
                        Save
                    </button>
                )}
            </form>
        </div>
    );
};

export default Profile;
