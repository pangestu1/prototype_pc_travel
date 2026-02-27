import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-6 right-6 z-40 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-50'
                }`}
        >
            <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/40 hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-bounce group"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className="text-3xl" />

                {/* Tooltip */}
                <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm font-medium py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
                    Chat with us!
                </span>
            </a>
        </div>
    );
};

export default FloatingWhatsApp;
