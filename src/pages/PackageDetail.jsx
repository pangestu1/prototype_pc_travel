import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaStar, FaClock, FaCheckCircle, FaTimesCircle, FaArrowLeft, FaPaperPlane } from 'react-icons/fa';
import FadeIn from '../components/animations/FadeIn';
import { destinationsData } from '../data/destinations';

const PackageDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the destination based on ID
    const destination = destinationsData.find(dest => dest.id === parseInt(id));

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, [id]);

    if (!destination) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center pt-24 bg-slate-50">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Package Not Found</h2>
                <p className="text-slate-600 mb-8">The travel package you are looking for does not exist.</p>
                <Link to="/destinations" className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors">
                    Back to Destinations
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full overflow-x-hidden pt-24 bg-slate-50 min-h-screen pb-20">
            {/* Action Bar */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-medium"
                >
                    <FaArrowLeft /> Back
                </button>
            </div>

            {/* Hero Image Section */}
            <section className="container mx-auto px-4 md:px-6 lg:px-8 mb-12">
                <FadeIn direction="up">
                    <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src={destination.image}
                            alt={destination.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                <span className="bg-primary/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase">
                                    {destination.region}
                                </span>
                                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium">
                                    <FaStar className="text-accent" /> {destination.rating}
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">{destination.name}</h1>
                            <div className="flex items-center gap-6 text-white/90 font-medium">
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-primary-light" />
                                    <span>{destination.name.split(',')[1] || destination.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaClock className="text-primary-light" />
                                    <span>{destination.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Main Details */}
                    <div className="lg:w-2/3">
                        <FadeIn direction="up" delay={0.2}>
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 mb-8">
                                <h2 className="text-3xl font-bold text-slate-800 mb-6">Overview</h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                    {destination.description}
                                </p>

                                <h3 className="text-2xl font-bold text-slate-800 mb-6">Trip Highlights</h3>
                                <ul className="space-y-4 mb-8">
                                    {destination.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                                            <span className="text-slate-700">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-100 pt-8 mt-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                            <FaCheckCircle className="text-green-500" /> What's Included
                                        </h3>
                                        <ul className="space-y-2">
                                            {destination.includes.map((item, index) => (
                                                <li key={index} className="text-slate-600 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                            <FaTimesCircle className="text-red-400" /> What's Excluded
                                        </h3>
                                        <ul className="space-y-2">
                                            {destination.excludes.map((item, index) => (
                                                <li key={index} className="text-slate-500 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Sidebar / Booking Card */}
                    <div className="lg:w-1/3">
                        <FadeIn direction="up" delay={0.4} className="sticky top-32">
                            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                                <div className="flex justify-between items-end mb-6 pb-6 border-b border-slate-100">
                                    <div>
                                        <p className="text-slate-500 font-medium mb-1">Starting from</p>
                                        <h2 className="text-4xl font-bold text-slate-800">{destination.price}</h2>
                                    </div>
                                    <span className="text-slate-500">/ person</span>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-slate-600">
                                        <span>Duration</span>
                                        <span className="font-semibold text-slate-800">{destination.duration}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-600">
                                        <span>Tour Type</span>
                                        <span className="font-semibold text-slate-800">Private / Group</span>
                                    </div>
                                    <div className="flex justify-between text-slate-600">
                                        <span>Availability</span>
                                        <span className="font-semibold text-green-600">Available</span>
                                    </div>
                                </div>

                                <Link
                                    to={`/contact?subject=Inquiry for ${destination.name}`}
                                    className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group mb-4"
                                >
                                    Let's Talk <FaPaperPlane className="transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <p className="text-center text-sm text-slate-500">
                                    Contact us via WhatsApp for customized itineraries and group discounts.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default PackageDetail;
