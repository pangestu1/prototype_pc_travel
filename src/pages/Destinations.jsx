import React, { useState } from 'react';
import { FaMapMarkerAlt, FaStar, FaSearch, FaFilter } from 'react-icons/fa';
import FadeIn from '../components/animations/FadeIn';
import { Link } from 'react-router-dom'; import { destinationsData } from '../data/destinations';

const Destinations = () => {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredDestinations = destinationsData.filter(d => {
        const matchesRegion = filter === 'All' || d.region === filter;
        const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            d.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesRegion && matchesSearch;
    });

    const regions = ['All', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania'];

    return (
        <div className="w-full overflow-x-hidden pt-24 bg-slate-50 min-h-screen">

            {/* Header */}
            <section className="py-20 bg-slate-900 text-white relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <FadeIn direction="up">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore <span className="text-primary-light">Destinations</span></h1>
                        <p className="text-xl max-w-2xl mx-auto text-slate-300">
                            Browse our handpicked selection of top-rated travel destinations across the globe.
                        </p>
                    </FadeIn>

                    {/* Mock Search Bar */}
                    <FadeIn delay={0.2} direction="up" className="mt-10 max-w-3xl mx-auto">
                        <div className="bg-white p-2 rounded-full flex items-center shadow-lg shadow-black/20">
                            <div className="pl-6 text-slate-400">
                                <FaSearch />
                            </div>
                            <input
                                type="text"
                                placeholder="Search destination, country, or keyword..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-3 bg-transparent text-slate-800 outline-none"
                            />
                            <div className="bg-primary text-white px-8 py-3 rounded-full font-semibold">
                                Search
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">

                    {/* Filters */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                        <div className="flex items-center gap-2 text-slate-700 font-medium">
                            <FaFilter className="text-primary" /> Filter by Region:
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {regions.map(region => (
                                <button
                                    key={region}
                                    onClick={() => setFilter(region)}
                                    className={`px-5 py-2 rounded-full font-medium transition-all ${filter === region
                                        ? 'bg-primary text-white shadow-md shadow-primary/30'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary'
                                        }`}
                                >
                                    {region}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredDestinations.map((dest, index) => (
                            <FadeIn key={dest.id} delay={index * 0.1} direction="up">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-slate-100">
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={dest.image}
                                            alt={dest.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white tracking-wider uppercase">
                                            {dest.region}
                                        </div>
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-semibold flex items-center gap-1 shadow-sm">
                                            <FaStar className="text-accent" /> {dest.rating}
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 text-primary-light text-sm font-medium mb-2">
                                            <FaMapMarkerAlt />
                                            <span>{dest.name.split(',')[1]}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-2">{dest.name}</h3>
                                        <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-2">
                                            {dest.description}
                                        </p>

                                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mb-4">
                                            <div className="text-slate-500 text-sm">
                                                <span className="block font-semibold text-slate-800">Duration</span>
                                                {dest.duration}
                                            </div>
                                            <div className="text-right">
                                                <span className="block font-semibold text-slate-800 text-lg text-primary">{dest.price}</span>
                                                <span className="text-slate-400 text-xs">/ person</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3">
                                            <Link
                                                to={`/package/${dest.id}`}
                                                className="block w-full text-center py-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-100 hover:text-primary hover:border-primary transition-colors duration-300"
                                            >
                                                View Details
                                            </Link>
                                            <Link
                                                to={`/contact?subject=Inquiry for ${dest.name}`}
                                                className="block w-full text-center py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors duration-300"
                                            >
                                                Let's Talk
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Destinations;
