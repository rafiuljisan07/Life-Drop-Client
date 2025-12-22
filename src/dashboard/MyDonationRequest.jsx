import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import {
    CheckCircle,
    XCircle,
    Clock,
    Edit,
    Trash2,
    Eye,
    User
} from 'lucide-react';
const MyDonationRequest = () => {
    const axiosSecure = useAxiosSecure();
    const [myDonationRequests, setMyDonationRequests] = useState([]);
    const [totalDonationRequests, setTotalDonationRequests] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        axiosSecure.get(`/my-donation-requests?size=${itemPerPage}&page=${currentPage - 1}`)
            .then(res => {
                setMyDonationRequests(res.data.request);
                setTotalDonationRequests(res.data.totalRequests)

            })
    }, [axiosSecure, currentPage, itemPerPage]);

    const numberOfPage = Math.ceil(totalDonationRequests / itemPerPage);
    const pages = [...Array(numberOfPage).keys()].map(p => p + 1)


    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    };

    const handleNext = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }
    // console.log(myDonationRequests);
    // console.log(totalDonationRequests);
    // console.log(pages);

    return (
        <>
            <h1 className='text-2xl font-semibold pb-4'>My Donation Requests</h1>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-red-300">
                        <thead className="bg-red-500">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Recipient Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Location
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Date & Time
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Blood Group
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Donor Information
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-red-300">
                            {
                                myDonationRequests.length === 0 ? (
                                    <tr>
                                        <td colSpan="7" className="px-6 py-8 text-center font-semibold text-gray-700">
                                            No Requests found.
                                        </td>
                                    </tr>
                                ) : (
                                    myDonationRequests.map((donation) => (
                                        <tr key={donation.id} className="hover:bg-red-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="shrink-0 h-10 w-10 bg-red-200 rounded-full flex items-center justify-center">
                                                        <User className="h-6 w-6 text-red-600" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {donation.recipientName}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-md text-gray-900">{donation.recipientDistrict}</div>
                                                <div className="text-sm text-gray-900">{donation.recipientUpazila}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    <div>{donation.donationDate}</div>
                                                    <div className="text-sm text-gray-500">{donation.donationTime}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {donation.bloodGroup}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {donation.donationStatus}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm">
                                                    <div className="font-medium text-gray-900">{donation.requesterName}</div>
                                                    <div className="text-gray-500">{donation.requesterEmail}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        // onClick={() => handleView(donation.id)}
                                                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors"
                                                    >
                                                        <Eye className="w-4 h-4 mr-1" />
                                                        View
                                                    </button>
                                                    <button
                                                        // onClick={() => handleEdit(donation.id)}
                                                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 transition-colors"
                                                    >
                                                        <Edit className="w-4 h-4 mr-1" />
                                                        Edit
                                                    </button>
                                                    <button
                                                        // onClick={() => handleDelete(donation.id)}
                                                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 transition-colors"
                                                    >
                                                        <Trash2 className="w-4 h-4 mr-1" />
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )
                            }
                        </tbody>
                    </table>
                </div>

                {/* Optional: Add pagination */}
                {
                    myDonationRequests.length > 0 &&
                    <div className="bg-gray-50 px-6 py-3 border-t border-red-300 flex justify-center">
                        <div className="flex space-x-2">
                            <button
                                onClick={handlePrev}
                                className="btn btn-ghost hover:bg-red-500 hover:text-white">
                                Previous
                            </button>
                            {
                                pages.map(p => (
                                    <button
                                        onClick={() => setCurrentPage(p)}
                                        className={`btn btn-ghost ${p == currentPage ? 'bg-red-500 text-white' : ''}`}>{p}</button>))
                            }
                            <button
                                onClick={handleNext}
                                className="btn btn-ghost hover:bg-red-500 hover:text-white">
                                Next
                            </button>
                        </div>
                    </div>}
            </div>
        </>

    );
};

export default MyDonationRequest;