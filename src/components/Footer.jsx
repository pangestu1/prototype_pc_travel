import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPlaneDeparture, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-slate-700 pb-12">

                    {/* Brand & Outline */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 group">
                            <FaPlaneDeparture className="text-3xl text-primary" />
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Nusantara<span className="text-primary">Travel</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed mt-4">
                            Explore the World with Confidence. We provide the best travel experiences with professional guides and premium services.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="hover:text-primary transition-colors inline-block transform hover:translate-x-1 duration-300">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors inline-block transform hover:translate-x-1 duration-300">Services</Link></li>
                            <li><Link to="/destinations" className="hover:text-primary transition-colors inline-block transform hover:translate-x-1 duration-300">Destinations</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors inline-block transform hover:translate-x-1 duration-300">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services" className="hover:text-primary transition-colors inline-block transform hover:translate-x-1 duration-300">Tour Packages</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors inline-block transform hover:translate-x-1 duration-300">Flight Booking</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors inline-block transform hover:translate-x-1 duration-300">Hotel Booking</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors inline-block transform hover:translate-x-1 duration-300">Private Trips</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                                <span>123 Travel Avenue, Jakarta, Indonesia 10110</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhoneAlt className="text-primary flex-shrink-0" />
                                <span>+62 812 3456 7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-primary flex-shrink-0" />
                                <span>info@nusantaratravel.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center pt-8 text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Nusantara Travel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
