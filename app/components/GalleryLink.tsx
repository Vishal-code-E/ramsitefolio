'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Images } from 'lucide-react';

export default function GalleryLink() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl -z-10">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          </div>

          <Images className="w-16 h-16 mx-auto mb-4 text-purple-400" />
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-white/60 mb-4">
            Gallery
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto text-lg">
            Explore moments captured through my professional journey, team collaborations, and memorable experiences.
          </p>

          <Link
            href="/gallery"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-gray-100 font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10">View Gallery</span>
            <Images className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
