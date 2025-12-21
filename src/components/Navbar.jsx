import { Menu, X } from 'lucide-react'
import { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/donation-requests', label: 'Donation Requests' },
        { path: '/search', label: 'Search Donors' },
    ]


    const handleLogout = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Logged out successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true
                });
                setOpen(false)
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Logout failed!",
                    text: "Please try again."
                });

            })
    }

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <img className='h-10' src={logo} alt="Life Drop Logo" />
                        <span className="text-2xl font-bold text-gray-900">
                            Life<span className="text-red-600"> Drop</span>
                        </span>
                    </Link>
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `font-medium ${isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}

                        {user ? (
                            <div className="relative flex items-center space-x-4">
                                <img
                                    onClick={() => setOpen(!open)}
                                    src={user?.photoURL}
                                    alt="profile"
                                    className="w-10 h-10 rounded-full cursor-pointer border-2 border-red-500 shadow-sm" />
                                <div className={`absolute right-0 top-10 transition-all origin-top mt-2 transform ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} bg-white rounded-md shadow-lg py-2 px-3 z-20 space-y-2`}>
                                    <button
                                        onClick={handleLogout}
                                        className='cursor-pointer text-gray-700 hover:text-red-600 font-medium hover:bg-red-100 rounded-lg p-1'
                                    >
                                        Logout
                                    </button>
                                    <Link
                                        to={'/dashboard'}
                                        className='text-gray-700 hover:text-red-600 font-medium hover:bg-red-100 rounded-lg p-1'>Dashboard</Link>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link
                                    to="/login"
                                    className="text-gray-700 hover:text-red-600 font-medium"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="text-gray-700 hover:text-red-600 font-medium"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='lg:hidden flex space-x-2'>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                        {user && (
                            <div className="relative flex items-center space-x-4">
                                <img
                                    onClick={() => setOpen(!open)}
                                    src={user?.photoURL}
                                    alt="profile"
                                    className="w-10 h-10 rounded-full cursor-pointer border-2 border-red-500 shadow-sm" />
                                <div className={`absolute right-0 top-10 transition-all origin-top mt-2 transform ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} bg-white rounded-md shadow-lg py-2 px-3 z-20 space-y-2`}>
                                    <button
                                        onClick={handleLogout}
                                        className='cursor-pointer text-gray-700 hover:text-red-600 font-medium hover:bg-red-100 rounded-lg p-1'
                                    >
                                        Logout
                                    </button>
                                    <Link
                                        to={'/dashboard'}
                                        className='text-gray-700 hover:text-red-600 font-medium hover:bg-red-100 rounded-lg p-1'>Dashboard</Link>
                                </div>
                            </div>
                        )}
                    </div>

                </div>

                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `px-4 py-2 font-medium ${isActive ? 'text-red-600 bg-red-50 rounded-lg' : 'text-gray-700'
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}

                            {user ? (
                                <>

                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="px-4 py-2 text-gray-700"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="px-4 py-2 btn-primary text-center"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar