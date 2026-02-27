import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import FadeIn from '../components/animations/FadeIn';

const Contact = () => {
    return (
        <div className="w-full overflow-x-hidden pt-24 bg-slate-50">

            {/* Header */}
            <section className="py-20 bg-slate-900 text-white relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <FadeIn direction="up">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact <span className="text-primary-light">Us</span></h1>
                        <p className="text-xl max-w-2xl mx-auto text-slate-300">
                            Have a question or ready to plan your trip? We're here to help you every step of the way.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Contact Info & Map */}
                        <div className="lg:w-5/12">
                            <FadeIn direction="left">
                                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-8">
                                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <FaMapMarkerAlt className="text-xl text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800">Our Office</h4>
                                                <p className="text-slate-600 mt-1">123 Travel Avenue, Suite 400<br />Jakarta, Indonesia 10110</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <FaPhoneAlt className="text-xl text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800">Phone Number</h4>
                                                <p className="text-slate-600 mt-1">+62 812 3456 7890<br />+62 21 9876 5432</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <FaEnvelope className="text-xl text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800">Email Address</h4>
                                                <p className="text-slate-600 mt-1">info@nusantaratravel.com<br />support@nusantaratravel.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <FaClock className="text-xl text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800">Working Hours</h4>
                                                <p className="text-slate-600 mt-1">Mon - Fri: 09:00 AM - 18:00 PM<br />Sat - Sun: 10:00 AM - 15:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Map Embed (Static Iframe) */}
                                <div className="rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 h-64">
                                    <iframe
                                        src="https://maps.google.com/maps?q=Jakarta,%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Maps Location"
                                    ></iframe>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:w-7/12">
                            <FadeIn direction="right" className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 h-full">
                                <h3 className="text-3xl font-bold text-slate-800 mb-2">Send Us a Message</h3>
                                <p className="text-slate-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

                                <form className="space-y-6" onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.target);
                                    const firstName = formData.get('firstName');
                                    const lastName = formData.get('lastName');
                                    const email = formData.get('email');
                                    const phone = formData.get('phone');
                                    const subject = formData.get('subject');
                                    const message = formData.get('message');

                                    const text = `Hi Nusantara Travel!\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`;
                                    const encodedText = encodeURIComponent(text);
                                    window.open(`https://wa.me/6281234567890?text=${encodedText}`, '_blank');
                                }}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First Name</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last Name</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                                placeholder="+62 812..."
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject / Destination Interest</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            required
                                            className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                            placeholder="E.g., Bali Honeymoon Package"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-semibold text-slate-700">Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows="5"
                                            className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                                            placeholder="Tell us more about your travel plans, number of guests, preferred dates, etc."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                                    >
                                        Send Message to WhatsApp <FaPaperPlane />
                                    </button>
                                </form>

                            </FadeIn>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
