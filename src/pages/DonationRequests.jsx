import React from 'react';

const DonationRequests = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Blood Donation Requests</h1>
                    <p className="text-lg text-gray-600">Help save lives by responding to urgent blood donation requests</p>
                </div>

                {/* Request Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-red-500">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">O+ Blood</h3>
                                    <p className="text-sm text-gray-500">Urgent Need</p>
                                </div>
                                <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">5 Units</span>
                            </div>
                            <p className="text-gray-700 text-sm mb-4">City General Hospital - Emergency Ward</p>
                            <div className="space-y-2 mb-4">
                                <p className="text-sm text-gray-600"><span className="font-semibold">Patient:</span> Age 45</p>
                                <p className="text-sm text-gray-600"><span className="font-semibold">Location:</span> Downtown Hospital</p>
                                <p className="text-sm text-gray-600"><span className="font-semibold">Expires:</span> Today</p>
                            </div>
                            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                                Donate Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DonationRequests;