import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Database, Cpu, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-2/3 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                            Hi, I'm <span className="text-primary">Arshiya</span> — Software Engineer
                        </h1>
                        <p className="mt-6 text-xl text-slate-400 max-w-2xl leading-relaxed">
                            I build scalable systems and intelligent infrastructure. Specializing in cloud automation, reinforcement learning, and advanced web engines.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            to="/projects"
                            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all transform hover:scale-105"
                        >
                            View Projects <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="/about"
                            className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold transition-all"
                        >
                            About Me
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12"
                    >
                        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                            <Terminal className="text-primary mb-4" size={32} />
                            <h3 className="text-lg font-semibold text-white">System Design</h3>
                            <p className="text-slate-500 text-sm mt-2">Architecting robust and distributed backend services.</p>
                        </div>
                        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                            <Cpu className="text-accent mb-4" size={32} />
                            <h3 className="text-lg font-semibold text-white">Automation</h3>
                            <p className="text-slate-500 text-sm mt-2">Leveraging RL for intelligent cloud infrastructure.</p>
                        </div>
                        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                            <Database className="text-purple-500 mb-4" size={32} />
                            <h3 className="text-lg font-semibold text-white">Data Engineering</h3>
                            <p className="text-slate-500 text-sm mt-2">Optimizing search engines and tokenization pipelines.</p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/3 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="relative z-10 w-full h-full rounded-2xl border-2 border-slate-800 overflow-hidden bg-slate-900 flex items-center justify-center">
                            <img
                                src="/profile.jpg"
                                alt="Arshiya"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.parentElement?.classList.add('p-8');
                                    e.currentTarget.outerHTML = '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-slate-700" height="120" width="120" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>';
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HomePage;
