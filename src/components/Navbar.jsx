import { Menu, X, Droplets } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const user = false

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/donation-requests', label: 'Donation Requests' },
        { path: '/search', label: 'Search Donors' },
    ]

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
                            <div className="flex items-center space-x-4">
                                <Link
                                    to="/dashboard"
                                    className="btn-primary"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    //   onClick={logout}
                                    className="text-gray-700 hover:text-red-600 font-medium"
                                >
                                    Logout
                                </button>
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
                                    className="btn-primary"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
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
                                    <Link
                                        to="/dashboard"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="px-4 py-2 btn-primary text-center"
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={() => {
                                            setMobileMenuOpen(false)
                                        }}
                                        className="px-4 py-2 text-gray-700 text-left"
                                    >
                                        Logout
                                    </button>
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