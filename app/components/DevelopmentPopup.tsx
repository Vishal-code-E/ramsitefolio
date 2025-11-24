'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Construction, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DevelopmentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the popup before
    const dismissed = localStorage.getItem('dev-popup-dismissed');
    if (!dismissed) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('dev-popup-dismissed', 'true');
  };

  const handleBlogClick = () => {
    handleDismiss();
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed right-8 top-32 z-50 w-80"
        >
          <div className="relative">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl animate-pulse" />
            
            {/* Main card */}
            <div className="relative bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute -top-2 -right-2 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors shadow-lg border border-white/20"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <Construction className="w-8 h-8 text-white" />
                  <Sparkles className="w-4 h-4 text-white/80 absolute -top-1 -right-1 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Under Development</h3>
                  <p className="text-xs text-gray-400">Exciting updates coming soon!</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-4" />

              {/* Content */}
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                While I&apos;m crafting something amazing, dive into my{' '}
                <span className="text-white font-semibold">latest insights</span> on{' '}
                <span className="text-white font-bold">
                  Agentic AI
                </span>
              </p>

              {/* CTA Button */}
              <Link
                href="/#blog"
                onClick={handleBlogClick}
                className="group relative w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:scale-105"
              >
                <span>Explore Blogs</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Decorative elements */}
              <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute -top-1 -left-1 w-16 h-16 bg-white/5 rounded-full blur-2xl" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
