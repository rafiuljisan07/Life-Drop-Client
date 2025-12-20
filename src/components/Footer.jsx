
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router'
import logo from '../assets/logo.png'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-slate-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div>
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <img className='h-10' src={logo} alt="Life Drop Logo" />
                            <span className="text-2xl font-bold text-red-500">Life<span className='text-white'> Drop</span> </span>
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Connecting blood donors with recipients in need. Join our community to save lives and make a difference.
                        </p>
                        <div className="flex space-x-4 text-xl">
                            <a href="https://www.facebook.com/rafiulislam.jisan.1" target='_blank'><FaFacebook /></a>
                            <a href="https://x.com/" target='_blank'><FaXTwitter /></a>
                            <a href="https://www.instagram.com/rafiuljisan07/" target='_blank'><FaInstagram /></a>
                            <a href="https://www.youtube.com/" target='_blank'><FaYoutube /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/search" className="text-gray-400 hover:text-white">
                                    Search Donors
                                </Link>
                            </li>
                            <li>
                                <Link to="/donation-requests" className="text-gray-400 hover:text-white">
                                    Donation Requests
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="text-gray-400 hover:text-white">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to="/register" className="text-gray-400 hover:text-white">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Donation Process
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Eligibility Criteria
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Safety Guidelines
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-red-500 mt-1" />
                                <div>
                                    <p className="text-gray-400">Emergency Hotline</p>
                                    <p className="font-medium">10666</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-red-500 mt-1" />
                                <div>
                                    <p className="text-gray-400">Email</p>
                                    <p className="font-medium">support@lifedrop.org</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-red-500 mt-1" />
                                <div>
                                    <p className="text-gray-400">Address</p>
                                    <p className="font-medium">123 Blood Street, Dhaka 1207</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400">
                            © {currentYear} LifeDrop. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <p className="text-gray-400 hover:text-white text-sm">
                                Terms of Service
                            </p>
                            <p className="text-gray-400 hover:text-white text-sm">
                                Privacy Policy
                            </p>
                            <p className="text-gray-400 hover:text-white text-sm">
                                Cookie Policy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer