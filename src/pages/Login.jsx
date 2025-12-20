import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
            <div className="min-h-screen bg-linear-to-br from-red-100 to-red-300 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-red-600 mb-2">Life Drop</h1>
                        <p className="text-gray-600">Blood Donation Organization</p>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter your password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition duration-200"
                        >
                           Log In
                        </button>
                    </form>

                    <p className="text-center text-gray-600 text-sm mt-6">
                        Don't have an account? <Link to={'/register'} className="text-red-600 hover:underline font-medium">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;