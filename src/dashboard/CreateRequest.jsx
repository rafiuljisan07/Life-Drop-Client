import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const CreateRequest = () => {
    const { user } = useContext(AuthContext)
    const [upazilas, setUpazilas] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [upazila, setUpazila] = useState('');
    const [district, setDistrict] = useState('');

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axios.get('/upazilas.json')
            .then(res => {
                setUpazilas(res.data)
            })

        axios.get('/districts.json')
            .then(res => {
                setDistricts(res.data)

            })
    }, []);


    const handleRequest = e => {
        e.preventDefault();
        const form = e.target;
        const requesterName = form.requesterName.value;
        const requesterEmail = form.requesterEmail.value;
        const recipientName = form.recipientName.value;
        const bloodGroup = form.bloodGroup.value;
        const recipientDistrict = form.recipientDistrict.value;
        const recipientUpazila = form.recipientUpazila.value;
        const hospitalName = form.hospitalName.value;
        const fullAddress = form.fullAddress.value;
        const donationDate = form.donationDate.value;
        const donationTime = form.donationTime.value;

        const formData = {
            requesterName,
            requesterEmail,
            recipientName,
            bloodGroup,
            recipientDistrict,
            recipientUpazila,
            hospitalName,
            fullAddress,
            donationDate,
            donationTime,
            donationStatus: 'pending'
        };

        axiosSecure.post('/donation-request', formData)
            .then(() => {
                form.reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Request Created!',
                    text: 'Blood donation request has been created successfully.',
                    timer: 2000,
                    showConfirmButton: false
                });
            })
            .catch(() => { })
    }


    return (
        <div>
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-red-600 mb-8">Create Blood Donation Request</h1>

                <form onSubmit={handleRequest} className="space-y-6">
                    {/* Requester Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Requester Name</label>
                            <input
                                type="text"
                                name='requesterName'
                                value={user?.displayName}
                                readOnly
                                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Requester Email</label>
                            <input
                                type="email"
                                name='requesterEmail'
                                value={user?.email}
                                readOnly
                                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 focus:outline-none" />
                        </div>
                    </div>

                    {/* Recipient Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Recipient Name</label>
                            <input
                                type="text"
                                name='recipientName'
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
                            <select
                                name='bloodGroup'
                                required
                                className="select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                                <option value="">Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                    </div>

                    {/* District & Upazila */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
                            <select
                                name='recipientDistrict'
                                value={district}
                                onChange={e => setDistrict(e.target.value)}
                                required
                                className="select w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500" >
                                <option value="">Select District</option>
                                {
                                    districts.map(d => <option value={d?.name} key={d.id}>{d?.name}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Upazila</label>
                            <select
                                value={upazila}
                                name='recipientUpazila'
                                onChange={e => setUpazila(e.target.value)}
                                required
                                className="select w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500">
                                <option value="">Select Upazila</option>
                                {
                                    upazilas.map(u => <option value={u?.name} key={u.id}>{u?.name}</option>)
                                }
                            </select>
                        </div>
                    </div>

                    {/* Hospital & Address */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Hospital Name</label>
                            <input
                                type="text"
                                name='hospitalName'
                                placeholder="e.g., Dhaka Medical College Hospital"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                            <input
                                type="text"
                                name='fullAddress'
                                placeholder="e.g., Zahir Raihan Rd, Dhaka"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
                        </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Donation Date</label>
                            <input
                                type="date"
                                name='donationDate'
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Donation Time</label>
                            <input
                                type="time"
                                name='donationTime'
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
                        </div>
                    </div>

                    {/* Request Message */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Request Message</label>
                        <textarea rows="4" placeholder="Write details about why you need blood..." className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none resize-none" required></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-200">
                        Create Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateRequest;