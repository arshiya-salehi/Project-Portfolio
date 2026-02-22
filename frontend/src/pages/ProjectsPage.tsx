import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
    {
        id: 'cloud-rl-scaler',
        title: 'Cloud Environment RL Auto-Scaler',
        summary: 'A sophisticated auto-scaling system using Reinforcement Learning to optimize resource allocation in cloud environments.',
        tech: ['Python', 'PyTorch', 'AWS SDK', 'Docker'],
        color: 'from-blue-600 to-indigo-700'
    },
    {
        id: 'uni-web-engine',
        title: 'University Web Engine',
        summary: 'A custom search and indexing pipeline for institutional data with advanced tokenization and TF-IDF relevance scoring.',
        tech: ['TypeScript', 'Express', 'Redis', 'Natural Language Processing'],
        color: 'from-emerald-600 to-teal-700'
    }
];

const ProjectsPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="space-y-4 mb-12">
                <h1 className="text-4xl font-bold text-white">Featured Projects</h1>
                <p className="text-slate-400 max-w-2xl">
                    A selection of my recent work in distributed systems, AI automation, and full-stack development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-xl"
                    >
                        <div className={`h-48 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                            <ExternalLink size={48} className="text-white/30 group-hover:scale-110 transition-transform" />
                        </div>

                        <div className="p-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map(t => (
                                    <span key={t} className="px-3 py-1 bg-slate-800 text-xs font-semibold text-slate-300 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-400 line-clamp-3 mb-6">
                                {project.summary}
                            </p>

                            <Link
                                to={`/projects/${project.id}`}
                                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                            >
                                View Case Study <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
