import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaPlaneDeparture } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const isHome = location.pathname === '/';
    const isSolid = isScrolled || !isHome;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Destinations', path: '/destinations' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'} ${isSolid
                ? 'bg-white/90 backdrop-blur-md shadow-md'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <FaPlaneDeparture className={`text-2xl transition-colors duration-300 ${isSolid ? 'text-primary' : 'text-white group-hover:text-primary-light'}`} />
                        <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isSolid ? 'text-slate-800' : 'text-white'}`}>
                            Nusantara<span className="text-primary-light">Travel</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-primary-light ${location.pathname === link.path
                                    ? 'text-primary-light font-semibold'
                                    : isSolid ? 'text-slate-600' : 'text-white/90'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className={`px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 ${isSolid
                                ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-dark'
                                : 'bg-white text-primary hover:bg-gray-100'
                                }`}
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className={`focus:outline-none ${isSolid ? 'text-slate-800' : 'text-white'}`}
                        >
                            {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Panel */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl rounded-b-2xl border-t border-gray-100 py-4 px-4 flex flex-col space-y-4 animate-fadeIn">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-base font-medium py-2 border-b border-gray-50 last:border-0 ${location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="mt-4 text-center bg-primary text-white px-5 py-3 rounded-xl font-medium shadow-md shadow-primary/20"
                        >
                            Let's Talk
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
