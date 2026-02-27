import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkedAlt, FaPlane, FaHotel, FaCar, FaBriefcase, FaArrowRight } from 'react-icons/fa';
import FadeIn from '../components/animations/FadeIn';

const servicesList = [
    {
        id: 1,
        title: 'Tour Packages',
        description: 'All-inclusive curated trip packages to top global destinations without any hassle.',
        icon: <FaMapMarkedAlt />,
        bgImage: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        title: 'Flight Booking',
        description: 'Get the best rates on domestic and international flights from top airlines.',
        icon: <FaPlane />,
        bgImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        title: 'Hotel Reservations',
        description: 'Exclusive deals at 5-star hotels and cozy boutique resorts worldwide.',
        icon: <FaHotel />,
        bgImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByZXNlcnZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id: 4,
        title: 'Private Trips',
        description: 'Customized itineraries tailored specifically to your family or private group.',
        icon: <FaCar />,
        bgImage: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 5,
        title: 'Corporate Travel',
        description: 'Professional travel management for business trips, conferences, and retreats.',
        icon: <FaBriefcase />,
        bgImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
];

const Services = () => {
    return (
        <div className="w-full overflow-x-hidden pt-24 bg-slate-50">

            {/* Header Section */}
            <section className="py-20 bg-slate-900 text-white relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <FadeIn direction="up">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-primary-light">Services</span></h1>
                        <p className="text-xl max-w-2xl mx-auto text-slate-300">
                            We offer comprehensive travel solutions to ensure your journey is seamless, comfortable, and memorable.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesList.map((service, index) => (
                            <FadeIn key={service.id} delay={index * 0.15} direction="up">
                                <div className="relative h-[400px] rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500">
                                    {/* Background Image */}
                                    <img
                                        src={service.bgImage}
                                        alt={service.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                        <div className="w-16 h-16 bg-primary/90 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-primary/30 transform group-hover:-translate-y-2 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                        <p className="text-gray-300 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100 line-clamp-2">
                                            {service.description}
                                        </p>
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center gap-2 text-primary-light font-bold hover:text-white transition-colors uppercase text-sm tracking-wider"
                                        >
                                            Let's Talk <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}

                        {/* Special Call to Action Card inside grid */}
                        <FadeIn delay={servicesList.length * 0.15} direction="up">
                            <div className="h-[400px] rounded-3xl bg-primary flex flex-col items-center justify-center text-center p-8 text-white shadow-xl shadow-primary/30 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl"></div>
                                <h3 className="text-3xl font-bold mb-4 z-10">Need a Custom Package?</h3>
                                <p className="mb-8 z-10 text-white/90">
                                    Contact our travel experts to craft an itinerary exactly the way you want it.
                                </p>
                                <Link
                                    to="/contact"
                                    className="px-8 py-3 bg-white text-primary rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-lg z-10"
                                >
                                    Contact Experts
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;
