import React from 'react';
import { FaEye, FaBullseye, FaHandshake, FaHeart, FaLeaf, FaSmileBeam } from 'react-icons/fa';
import FadeIn from '../components/animations/FadeIn';

const teamMembers = [
    {
        id: 1,
        name: 'Budi Santoso',
        role: 'Founder & CEO',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        bio: 'Travel enthusiast with 15+ years of experience in the international tourism industry.',
    },
    {
        id: 2,
        name: 'Siti Rahmawati',
        role: 'Head of Operations',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        bio: 'Ensures every trip runs smoothly and every customer is satisfied with our premium services.',
    },
    {
        id: 3,
        name: 'Kevin Pratama',
        role: 'Lead Tour Guide',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        bio: 'A highly experienced guide fluent in 4 languages, ready to show you the hidden gems.',
    },
];

const About = () => {
    return (
        <div className="w-full overflow-x-hidden pt-24 bg-slate-50">
            {/* Header Section */}
            <section className="py-20 bg-slate-900 text-white relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <FadeIn direction="up">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">About <span className="text-primary-light">Us</span></h1>
                        <p className="text-xl max-w-2xl mx-auto text-slate-300">
                            Discover who we are and why we are passionate about making your travel dreams come true.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <FadeIn direction="left" className="lg:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Company Overview"
                                className="rounded-3xl shadow-2xl"
                            />
                        </FadeIn>
                        <FadeIn direction="right" delay={0.2} className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Journey</h2>
                            <p className="text-lg text-slate-600 mb-6">
                                Founded in 2010, Nusantara Travel began with a simple idea: to make authentic travel experiences accessible to everyone. We've grown from a small local agency to a trusted international travel partner.
                            </p>
                            <p className="text-lg text-slate-600 mb-8">
                                Our team of dedicated professionals works tirelessly to curate the best itineraries, source the most comfortable accommodations, and partner with knowledgeable local guides.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-primary">
                                    <h4 className="text-3xl font-bold text-primary mb-2">10k+</h4>
                                    <p className="text-slate-500 font-medium">Happy Travelers</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-accent">
                                    <h4 className="text-3xl font-bold text-accent mb-2">15+</h4>
                                    <p className="text-slate-500 font-medium">Years Experience</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-16">Vision & Mission</h2>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-10">
                        <FadeIn delay={0.2} direction="up" className="bg-slate-50 p-10 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
                            <div className="relative z-10 text-center">
                                <FaEye className="text-6xl text-primary mx-auto mb-6" />
                                <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Vision</h3>
                                <p className="text-lg text-slate-600">
                                    To be the world's most trusted and innovative travel agency, creating lifetime memories for our customers while promoting sustainable tourism globally.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4} direction="up" className="bg-slate-50 p-10 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
                            <div className="relative z-10 text-center">
                                <FaBullseye className="text-6xl text-accent mx-auto mb-6" />
                                <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Mission</h3>
                                <p className="text-lg text-slate-600">
                                    To provide exceptional, personalized travel experiences through expert guidance, high-quality partnerships, and an unwavering commitment to customer satisfaction.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Core Values</h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FadeIn delay={0.1} direction="up" className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                                <FaHandshake className="text-4xl text-primary" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">Integrity</h4>
                            <p className="text-slate-400">Honesty and transparency in all our interactions and pricing.</p>
                        </FadeIn>

                        <FadeIn delay={0.2} direction="up" className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
                                <FaHeart className="text-4xl text-primary" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">Passion</h4>
                            <p className="text-slate-400">A deep love for travel that translates into unforgettable trips.</p>
                        </FadeIn>

                        <FadeIn delay={0.3} direction="up" className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                                <FaSmileBeam className="text-4xl text-primary" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">Customer First</h4>
                            <p className="text-slate-400">Your satisfaction and safety is our top priority, always.</p>
                        </FadeIn>

                        <FadeIn delay={0.4} direction="up" className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
                                <FaLeaf className="text-4xl text-primary" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">Sustainability</h4>
                            <p className="text-slate-400">Commited to eco-friendly practices to protect our beautiful planet.</p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-16">Meet Our Team</h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {teamMembers.map((member, index) => (
                            <FadeIn key={member.id} delay={index * 0.2} direction="up">
                                <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                                    <div className="h-64 overflow-hidden relative">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-4 left-6 text-white">
                                            <h3 className="text-2xl font-bold">{member.name}</h3>
                                            <p className="text-primary-light font-medium">{member.role}</p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-slate-600">"{member.bio}"</p>
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

export default About;
