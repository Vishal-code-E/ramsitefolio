"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
    Rocket,
    Code,
    Users,
    Trophy,
    Crown,
    Flag,
    Calendar
} from "lucide-react";

interface TimelineItemProps {
    data: {
        title: string;
        role: string;
        year: string;
        description: string;
        icon: React.ReactNode;
    };
    index: number;
}

const TimelineItem = ({ data, index }: TimelineItemProps) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center justify-between md:justify-normal md:gap-8 w-full mb-12 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
        >
            {/* Date/Year on the opposite side for desktop */}
            <div className={`hidden md:block w-5/12 text-right ${isEven ? "text-right" : "text-left"}`}>
                <span className="text-4xl font-black text-white/5 md:text-6xl absolute top-0 -z-10 select-none">
                    {data.year}
                </span>
            </div>

            {/* Center Line Dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-blue-500/50 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    <div className="text-blue-400">
                        {data.icon}
                    </div>
                </div>
            </div>

            {/* Content Card */}
            <div className="w-full md:w-5/12 pl-16 md:pl-0">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors group">

                    <div className="mb-1 text-blue-400 text-sm font-semibold tracking-wider flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {data.year}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                        {data.title}
                    </h3>

                    <div className="text-slate-400 text-sm font-medium mb-3">
                        {data.role}
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">
                        {data.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const milestones = [
        {
            title: "The Beginning",
            role: "Member",
            year: "2021",
            description: "My journey with E-Cell REC began with a spark of curiosity. Joining as a member, I was immediately drawn to the energy of innovation and the power of entrepreneurship to solve real-world problems. It was here I found my tribe.",
            icon: <Rocket className="w-5 h-5" />,
        },
        {
            title: "Digital Foundation",
            role: "Web Tech Head",
            year: "2022",
            description: "Stepping up as Web Tech Head, I led the development of our official digital platforms. This role allowed me to bridge technology with our organizational goals, creating a seamless online experience for our community.",
            icon: <Code className="w-5 h-5" />,
        },
        {
            title: "Rising Leadership",
            role: "Core Team Lead",
            year: "2023",
            description: "As responsibilities grew, I took charge of organizing major events and mentoring junior members. This period was crucial in refining my management style and understanding the intricacies of running a successful student body.",
            icon: <Users className="w-5 h-5" />,
        },
        {
            title: "National Stage",
            role: "NEC Delegate",
            year: "2024",
            description: "Participating in the National Entrepreneurship Challenge (NEC) 2024 was a defining moment. It tested our resilience and teamwork against the best in the country, strengthening our resolve to build a world-class ecosystem.",
            icon: <Flag className="w-5 h-5" />,
        },
        {
            title: "Taking the Helm",
            role: "President",
            year: "2024-25",
            description: "Ascending to the Presidency was both an honor and a challenge. My focus shifted to strategic growth, fostering a culture of pure innovation, and empowering every member to become a leader in their own right.",
            icon: <Crown className="w-5 h-5" />,
        },
        {
            title: "Vision 2025",
            role: "Team Leader",
            year: "2025",
            description: "Leading the charge for NEC 2025, we are poised to set new benchmarks. With a renewed vision and a dedicated team, we are transforming E-Cell REC into a powerhouse of entrepreneurial talent and successful ventures.",
            icon: <Trophy className="w-5 h-5" />,
        },
    ];

    return (
        <div className="py-20 relative" ref={ref}>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400 mb-4">
                    My E-Cell Journey
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    From a curious member to leading the organization, here is how my path unfolded.
                </p>
            </div>

            <div className="relative max-w-5xl mx-auto px-4">
                {/* Vertical Line Container */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full overflow-hidden">
                    {/* Filling Line */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="w-full bg-linear-to-b from-blue-500 via-purple-500 to-pink-500"
                    />
                </div>

                {/* Items */}
                <div className="space-y-8">
                    {milestones.map((item, index) => (
                        <TimelineItem key={index} data={item} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
