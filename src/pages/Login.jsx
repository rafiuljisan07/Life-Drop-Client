import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const { signInUser, role } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(() => {
                e.target.reset();
                Swal.fire({
                    icon: "success",
                    title: "Login Successful!",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true
                });
                navigate(location.state || '/')
            })
            .catch(err => {
                if (err.code === 'auth/wrong-password') {
                    Swal.fire({
                        icon: "error",
                        title: "Login failed!",
                        text: "🚫 Incorrect password. Try again."
                    });
                }
                else if (err.code === "auth/invalid-credential")
                    Swal.fire({
                        icon: "error",
                        title: "Login failed!",
                        text: "⚠️ Invalid credentials. Please check your email and password."
                    });
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Login failed!",
                        text: err.message
                    });
                }
            });
    };
    return (
        <div>
            <div className="min-h-screen bg-linear-to-br from-red-100 to-red-400 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-red-600 mb-2">Life Drop</h1>
                        <p className="text-gray-600">Blood Donation Organization</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <label className='block'>
                            <span className="text-sm font-medium text-gray-700 mb-2">
                                Email
                            </span>
                            <input
                                type="email"
                                name='email'
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter your email"
                            />
                        </label>

                        <label className='block relative'>
                            <span className="text-sm font-medium text-gray-700 mb-2">
                                Password
                            </span>
                            <input
                                type={showPass ? 'text' : 'password'}
                                name='password'
                                required
                                
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter your password"
                            />
                            <button className='absolute right-4 top-8 text-xl'
                                type='button' onClick={() => setShowPass(!showPass)}>
                                {showPass ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </label>

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