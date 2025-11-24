'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export default function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

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

                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-4">
                        Stay in the Loop
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto text-lg">
                        Get the latest articles, tutorials, and updates delivered straight to your inbox. No spam, just quality content.
                    </p>

                    <div className="flex flex-col items-center justify-center space-y-6">
                        <a
                            href="https://agenticaiavataq.hashnode.dev/newsletter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-gray-100 font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            <span className="relative z-10">Subscribe on Hashnode</span>
                            <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <p className="text-xs text-gray-500 max-w-xs mx-auto">
                            Join the newsletter on Hashnode to get notified automatically when I publish new posts.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
