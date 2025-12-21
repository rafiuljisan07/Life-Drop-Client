import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [passErr, setPassErr] = useState('');
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();



    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.files[0];
        const password = form.password.value;
        const bloodGroup = form.bloodGroup.value;
        const district = form.district.value;
        const upazila = form.upazila.value;

        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_key}`, { image: photo }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        const photoURL = res.data.data.display_url;

        const regEX = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!regEX.test(password)) {
            setPassErr('Password must have at least 1 uppercase, 1 lowercase and be 6+ characters.')
            return
        };

        const formData = {
            email,
            password,
            name,
            photoURL
        }

        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photoURL).then().catch(err => alert(err.code));
                Swal.fire({
                    icon: "success",
                    title: "Registration Successful!",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true
                });
                axios.post(`http://localhost:3000/users`, formData)
                    .then(() => {

                    })
                    .catch(err => alert(err))
                navigate(location.state || '/');
            })
            .catch(err => {
                if (err.code === 'auth/email-already-in-use') {
                    Swal.fire({
                        icon: "error",
                        title: "Registration failed!",
                        text: '❌ This email is already registered. Please log in instead.'
                    });
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Registration failed!",
                        text: `${err.code}`
                    });
                }
            })

    }
    return (
        <div>
            <div className="min-h-screen bg-linear-to-b from-red-100 to-red-400 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                    <h1 className="text-3xl font-bold text-red-600 mb-2 text-center">Life Drop</h1>
                    <p className="text-gray-600 text-center mb-8">Join our blood donation community</p>

                    <form onSubmit={handleRegister} className="space-y-4">
                        <input
                            type="email"
                            name='email'
                            required
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />

                        <input
                            type="text"
                            name='name'
                            required
                            placeholder="Full Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />

                        <input
                            type="file"
                            name='photo'
                            required
                            accept="image/*"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />

                        <select
                            name='bloodGroup'
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
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

                        <select
                            name='district'
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select District</option>
                        </select>

                        <select name='upazila' className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select Upazila</option>
                        </select>

                        <label className='relative block'>
                            <input
                                type={showPass ? 'text' : 'password'}
                                name='password'
                                required
                                placeholder="Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                            <button className='absolute right-4 top-3 text-xl'
                                type='button' onClick={() => setShowPass(!showPass)}>
                                {showPass ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </label>
                        {
                            passErr && <p className='text-red-500'>Password must have at least 1 uppercase, 1 lowercase and be 6+ characters.</p>
                        }

                        <input
                            type="password"
                            required
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />

                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                        >
                            Register
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-6">
                        Already have an account? <Link to={'/login'} className="text-red-600 hover:underline font-semibold">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;