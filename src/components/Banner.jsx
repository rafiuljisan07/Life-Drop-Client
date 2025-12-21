import React from 'react';
import bannerImg from '../assets/banner.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>
            <div className='min-h-120 flex items-center my-10 justify-center px-4 relative overflow-hidden rounded-2xl '>
                <img src={bannerImg}
                    alt="banner"
                    className='absolute inset-0 h-full w-full object-cover' />
                <div className="absolute inset-0 bg-linear-to-b from-black/0 to-black/60 "></div>
                <div className="absolute max-w-2xl w-full text-center">
                    <h1 className="text-4xl lg:text-7xl font-bold text-white mb-4">
                        Save Lives, Share Blood
                    </h1>
                    <p className="text-lg text-gray-100 mb-8">
                        Be a hero in your community. Donate blood and help those in need.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;