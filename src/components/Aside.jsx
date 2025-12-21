import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router';

const Aside = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden ${isOpen && 'hidden'} fixed top-2 left-2 z-50 p-2 text-red-900 bg-red-100  text-xl rounded`}
            >
               <BsThreeDotsVertical />
            </button>
            <div className={`fixed md:static inset-y-0 left-0 w-64 bg-red-900 text-white p-6 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 md:min-h-screen z-40`}>
                <h2 className="text-2xl font-bold mb-8">Life Drop <span className='text-xs font-medium'>(Admin)</span></h2>
                <nav className="space-y-4">
                    <Link
                        to={'/dashboard/profile'}
                        className='block px-4 py-2 rounded hover:bg-red-800 transition'
                        onClick={() => setIsOpen(false)}>Profile</Link>
                    <Link
                        to={'/dashboard'}
                        className='block px-4 py-2 rounded hover:bg-red-800 transition'
                        onClick={() => setIsOpen(false)}>Dashboard Home</Link>
                    <Link
                        to={'/dashboard/all-users'}
                        className='block px-4 py-2 rounded hover:bg-red-800 transition'
                        onClick={() => setIsOpen(false)}>All Users</Link>
                    <Link
                        to={'/dashboard/all-blood-donation-request'}
                        className='block px-4 py-2 rounded hover:bg-red-800 transition'
                        onClick={() => setIsOpen(false)}>All Blood Donation Request</Link>
                    
                </nav>
            </div>
        </div>
    );
};

export default Aside;