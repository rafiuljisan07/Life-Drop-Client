import React from 'react';
import { motion } from 'framer-motion';
import bannerImg from '../assets/hero.jpg'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>
            <div className='min-h-screen flex items-center mb-10 justify-center px-4 relative overflow-hidden'>
                <img src={bannerImg}
                    alt="banner"
                    className='absolute inset-0 h-full w-full object-cover' />
                <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/80 "></div>
                <div className="absolute max-w-2xl w-full text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5, ease: 'easeIn', delay: .25 }}
                        className="text-4xl lg:text-7xl font-bold text-white mb-4">
                        Save Lives, Share Blood
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5, ease: 'easeIn', delay: .5 }}
                        className="text-lg text-gray-100 mb-8">
                        Be a hero in your community. Donate blood and help those in need.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5, ease: 'easeIn', delay: .75 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to={'/register'}
                            className="max-w-md mx-auto sm:mx-0 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105 duration-200"
                        >
                            Join as a Donor
                        </Link>
                        <Link
                            to={"/search"}
                            className="max-w-md mx-auto sm:mx-0 bg-white text-red-600 hover:bg-red-50 font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105 duration-200"
                        >
                            Search Donors
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;