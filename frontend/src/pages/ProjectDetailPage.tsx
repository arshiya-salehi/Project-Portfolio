import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Layers, Target, Zap, BarChart3 } from 'lucide-react';

const projectData: { [key: string]: any } = {
    'cloud-rl-scaler': {
        title: 'Cloud Environment RL Auto-Scaler',
        githubUrl: 'https://github.com/arshiya-salehi/Clound-Envirment-RL-Auto-scaler',
        problem: 'Traditional threshold-based scaling often lags behind real-time traffic spikes or leads to expensive over-provisioning.',
        solution: 'Developed a Reinforcement Learning agent (using Deep Q-Learning) that predicts traffic patterns and pre-emptively scales microservices across AWS clusters.',
        stack: ['Python', 'AWS Auto Scaling', 'PyTorch', 'Prometheus', 'Docker'],
        features: [
            'Proactive scaling based on traffic prediction',
            'Cost-aware reward function to minimize overhead',
            'Integration with existing Prometheus metrics',
            'Support for multiple target groups'
        ],
        results: 'Reduced average response latency by 25% during peak loads and cut infrastructure costs by 15% compared to static threshold scaling.'
    },
    'uni-web-engine': {
        title: 'University Web Engine',
        githubUrl: 'https://github.com/arshiya-salehi/University-Web-Engine',
        problem: 'Fragmentation of institutional data made it difficult for students and faculty to find relevant educational resources efficiently.',
        solution: 'Built a specialized web crawler and indexing engine that processes university documents and creates a searchable knowledge base using NLP techniques.',
        stack: ['TypeScript', 'Express', 'Redis', 'Natural Language Toolkit', 'React'],
        features: [
            'Distributed crawling system with politeness policy',
            'Efficient tokenization and stop-word removal',
            'Relevance scoring using TF-IDF logic',
            'Real-time search suggestions via Redis'
        ],
        results: 'Maintained less than 100ms search latency across 50,000+ indexed documents and improved search accuracy by 40% based on user feedback.'
    }
};

const ProjectDetailPage = () => {
    const { id } = useParams();
    const project = id ? projectData[id] : null;

    if (!project) {
        return (
            <div className="max-w-6xl mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl text-white">Project not found</h2>
                <Link to="/projects" className="text-primary mt-4 inline-block">Back to Projects</Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <Link to="/projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-white mb-12 transition-colors">
                    <ArrowLeft size={18} /> Back to Projects
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">{project.title}</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <section className="space-y-4">
                            <div className="flex items-center gap-3 text-primary">
                                <Target size={24} />
                                <h2 className="text-2xl font-bold">The Problem</h2>
                            </div>
                            <p className="text-slate-400 text-lg leading-relaxed">{project.problem}</p>
                        </section>

                        <section className="space-y-4">
                            <div className="flex items-center gap-3 text-accent">
                                <Zap size={24} />
                                <h2 className="text-2xl font-bold">The Solution</h2>
                            </div>
                            <p className="text-slate-400 text-lg leading-relaxed">{project.solution}</p>
                        </section>

                        <section className="space-y-4">
                            <div className="flex items-center gap-3 text-purple-500">
                                <BarChart3 size={24} />
                                <h2 className="text-2xl font-bold">Results & Impact</h2>
                            </div>
                            <p className="text-slate-400 text-lg font-medium bg-slate-900 border border-slate-800 p-6 rounded-2xl italic">
                                "{project.results}"
                            </p>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
                            <div className="flex items-center gap-2 text-white font-bold mb-4">
                                <Layers size={20} className="text-primary" /> Technical Stack
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((item: string) => (
                                    <span key={item} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700">
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 border-t border-slate-800 pt-8">
                                <h3 className="text-white font-bold mb-4">Key Features</h3>
                                <ul className="space-y-3">
                                    {project.features.map((feature: string) => (
                                        <li key={feature} className="text-slate-400 text-sm flex gap-2">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-800">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl transition-all"
                                >
                                    <Github size={20} /> View Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetailPage;
