'use client';

import React from 'react';
import { AnimatedTestimonials } from '../../components/ui/animated-testimonials';

const Testimonials = () => {
    const testimonials = [
        {
            quote:
                "Working with Ram has been an incredible experience. His expertise in AI and full-stack development brought our vision to life with exceptional precision and creativity.",
            name: "Sarah Johnson",
            designation: "CTO at TechVentures",
            src: "https://placehold.co/500x500/2a2a2a/ffffff?text=Sarah",
        },
        {
            quote:
                "Ram's ability to transform complex problems into elegant solutions is remarkable. His work on our AI platform exceeded all expectations and delivered real business value.",
            name: "Michael Chen",
            designation: "Founder at InnovateLabs",
            src: "https://placehold.co/500x500/2a2a2a/ffffff?text=Michael",
        },
        {
            quote:
                "An outstanding developer with a keen eye for detail. Ram's contributions to our startup were instrumental in securing our Series A funding. Highly recommended!",
            name: "Emily Rodriguez",
            designation: "CEO at StartupHub",
            src: "https://placehold.co/500x500/2a2a2a/ffffff?text=Emily",
        },
        {
            quote:
                "Ram's technical prowess combined with his business acumen makes him a rare find. He doesn't just code—he builds products that users love and businesses need.",
            name: "David Park",
            designation: "Product Manager at CloudScale",
            src: "https://placehold.co/500x500/2a2a2a/ffffff?text=David",
        },
        {
            quote:
                "Collaborating with Ram on our machine learning project was a game-changer. His innovative approach and dedication to excellence set him apart from other developers.",
            name: "Priya Sharma",
            designation: "Head of AI at DataDriven Inc",
            src: "https://placehold.co/500x500/2a2a2a/ffffff?text=Priya",
        },
    ];

    return (
        <section id="testimonials" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        What People Say
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Testimonials from clients and collaborators I&apos;ve worked with
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
                </div>

                <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            </div>
        </section>
    );
};

export default Testimonials;
