import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobeAmericas, FaShieldAlt, FaHeadset, FaStar, FaArrowRight } from 'react-icons/fa';
import FadeIn from '../components/animations/FadeIn';
import { destinationsData } from '../data/destinations';

const Home = () => {
    return (
        <div className="w-full overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                </div>

                <div className="container relative z-10 px-4 md:px-6 lg:px-8 text-center text-white mt-16">
                    <FadeIn delay={0.2} direction="up">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 drop-shadow-lg">
                            Explore the World <br className="hidden md:block" />
                            with <span className="text-primary-light">Confidence</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up">
                        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
                            Discover breathtaking destinations, exclusive deals, and unforgettable experiences curated just for you by Nusantara Travel.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6} direction="up">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/destinations"
                                className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg shadow-primary/30 w-full sm:w-auto"
                            >
                                Explore Destinations
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold text-lg hover:bg-white/30 transition-all w-full sm:w-auto"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Featured Destinations */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <FadeIn direction="left" className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Popular Destinations</h2>
                            <p className="text-slate-600">Handpicked destinations for your next great adventure. Explore our top-rated tours loved by thousands of travelers.</p>
                        </FadeIn>
                        <FadeIn direction="right" delay={0.2} className="mt-4 md:mt-0">
                            <Link to="/destinations" className="flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group">
                                View All <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinationsData.slice(0, 3).map((dest, index) => (
                            <FadeIn key={dest.id} delay={index * 0.2} direction="up">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={dest.image}
                                            alt={dest.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-sm">
                                            <FaStar className="text-accent" /> {dest.rating}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="text-xl font-bold text-slate-800">{dest.name}</h3>
                                            <span className="text-lg font-bold text-primary">{dest.price}</span>
                                        </div>
                                        <div className="text-slate-500 text-sm mb-4">
                                            Duration: {dest.duration}
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <Link to={`/package/${dest.id}`} className="block w-full text-center py-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-100 hover:text-primary transition-colors duration-300">
                                                View Details
                                            </Link>
                                            <Link to="/contact" className="block w-full text-center py-3 border border-primary bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors duration-300">
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

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-16">Why Choose Nusantara Travel?</h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <FadeIn delay={0.2} direction="up" className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
                            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                <FaGlobeAmericas className="text-3xl text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Worldwide Coverage</h3>
                            <p className="text-slate-600">Access to over 10,000 destinations spread across the globe with exclusive partnership rates.</p>
                        </FadeIn>

                        <FadeIn delay={0.4} direction="up" className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
                            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                <FaShieldAlt className="text-3xl text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Safe & Secure</h3>
                            <p className="text-slate-600">Your safety is our priority. We partner only with verified hotels, guides, and transportation providers.</p>
                        </FadeIn>

                        <FadeIn delay={0.6} direction="up" className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
                            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                <FaHeadset className="text-3xl text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">24/7 Support</h3>
                            <p className="text-slate-600">Our dedicated support team is available around the clock to assist you before, during, and after your trip.</p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Travelers Say</h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                id: 1,
                                name: 'Sarah Jenkins',
                                role: 'Adventure Traveler',
                                text: '"Nusantara Travel planned my entire trip to Japan flawlessly. The guides were amazing and the hotels were top-notch!"',
                            },
                            {
                                id: 2,
                                name: 'Michael Chen',
                                role: 'Family Vacationer',
                                text: '"Our family trip to Bali was unforgettable. They handled everything from flights to kid-friendly activities. Highly recommended!"',
                            },
                            {
                                id: 3,
                                name: 'Emma Watson',
                                role: 'Solo Explorer',
                                text: '"As a solo female traveler, safety was my main concern. They made me feel completely secure and provided an incredible itinerary."',
                            }
                        ].map((testimonial, index) => (
                            <FadeIn key={testimonial.id} delay={index * 0.2} direction="up">
                                <div className="glass-dark p-8 rounded-2xl text-left">
                                    <div className="flex text-accent mb-4">
                                        {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                                    </div>
                                    <p className="text-slate-300 font-medium italic mb-6">
                                        {testimonial.text}
                                    </p>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                                        <span className="text-sm text-primary-light">{testimonial.role}</span>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 text-center text-white">
                    <FadeIn direction="up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Your Next Adventure?</h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                            Let's create memories that will last a lifetime. Contact us today to start planning your dream vacation.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-10 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            Start Planning Now
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Home;
