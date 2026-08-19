// src/components/ServiceGalleryTemplate.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const ServiceGalleryTemplate = ({ pageKey }) => {
    const currentService = servicesData[pageKey];

    // Base fallback mechanism agar key galat ho jaye
    if (!currentService) {
        return <div className="text-white p-12 text-center">Service Configuration Details Not Found.</div>;
    }

    return (
        <section className="max-w-7xl mx-auto px-6 py-12 bg-transparent text-white">
            {/* HEADER SECTION METADATA */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tight">
                    {currentService.title} <span className="text-purple-500">{currentService.highlight}</span>
                </h2>
                <p className="text-gray-400 text-sm mt-2 max-w-2xl mx-auto">
                    {currentService.subtitle}
                </p>
            </div>

            {/* GALLERY GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5">
                {currentService.gallery.map((item, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-[1rem] border border-gray-800/60 bg-[#111111] p-2 transition-all duration-300 hover:border-purple-500/30 flex flex-col justify-between h-full"
                    >
                        
                        {/* Safe SEO/GEO Crawler Data Injection */}
                        <span className="absolute inset-0 opacity-0 pointer-events-none select-none w-0 h-0 overflow-hidden">
                            {item.geo}
                        </span>

                        {/* Hover Cyberpunk Glow Effect */}
                        <div className="absolute-inset-1 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 blur-xl group-hover:opacity-100 transition duration-700 rounded-[1rem]"></div>

                        {/* IMAGE CONTAINER FRAME - Strict height control mechanism */}
                        <div className="relative overflow-hidden rounded-[0.5rem] bg-[#090909] w-full flex items-center justify-centerr">
                            <img
                                src={item.img}
                                alt={item.alt} // Direct Google Image SEO Mapping
                                className="w-full h-[290px] object-cover object-top opacity-90 group-hover:scale-102 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/4 via-transparent to-transparent"></div>
                        </div>

                        {/* META DETAILS AREA & RIGHT CONTACT ACTION BUTTON */}
                        <div className="relative pt-8 px-1 flex items-center justify-between mt-auto">
                            <div>
                                <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold block mb-0.5">
                                    Development Niche
                                </span>
                                <h3 className="text-white font-medium text-base group-hover:text-purple-400 transition-colors duration-300">
                                    {item.label}
                                </h3>
                            </div>

                            {/* QUICK LINK ACTION ROUTE */}
                            <Link
                                to="/contact"
                                className="w-9 h-9 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white hover:scale-105 transition-all duration-300 transform"
                                title={`Get direct custom estimation for ${item.label}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceGalleryTemplate;