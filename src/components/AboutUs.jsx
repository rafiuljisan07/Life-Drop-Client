import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="min-h-100 px-4 py-12 my-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-red-600 mb-4">About Life Drop</h1>
                    <p className="text-gray-700 text-lg mb-8">
                        We connect generous blood donors with those in need, saving lives one donation at a time.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className=" p-8 rounded-lg shadow-lg bg-red-50 border-l-4 border-red-500">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                            <p className="text-gray-600 text-md">To build a reliable blood donation network that ensures timely access to safe blood.</p>
                        </div>
                        
                        <div className=" p-8 rounded-lg shadow-lg bg-red-50 border-l-4 border-red-500">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Driven</h3>
                            <p className="text-gray-600 text-md">Powered by volunteers and donors who believe in the power of giving life.</p>
                        </div>
                        
                        <div className=" p-8 rounded-lg shadow-lg bg-red-50 border-l-4 border-red-500">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Impact</h3>
                            <p className="text-gray-600 text-md">Every donation helps save lives and makes a real difference in our community.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;