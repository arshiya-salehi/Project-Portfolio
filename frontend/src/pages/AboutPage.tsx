import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, CheckCircle } from 'lucide-react';

const AboutPage = () => {
    const skills = [
        { name: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL'] },
        { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux'] },
        { name: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'Redis'] },
        { name: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform'] },
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
            >
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="w-48 h-48 flex-shrink-0">
                        <img
                            src="/profile.jpg"
                            alt="Arshiya"
                            className="w-full h-full object-cover rounded-2xl border-2 border-slate-800 shadow-2xl"
                            onError={(e) => {
                                e.currentTarget.src = "https://ui-avatars.com/api/?name=Arshiya&background=4f46e5&color=fff&size=128";
                            }}
                        />
                    </div>
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold text-white">About Me</h1>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            I am a Software Engineer passionate about bridge the gap between complex infrastructure and user-centric applications.
                            My journey in tech is driven by a curiosity for how things work at scale and a dedication to solving real-world problems
                            using modern technology.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/arshiya-salehi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/arshiya-salehi-889170264/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:hello@arshiya.dev" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={skillGroup.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-slate-900 border border-slate-800 p-6 rounded-2xl"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">{skillGroup.name}</h3>
                            <ul className="space-y-2">
                                {skillGroup.items.map(item => (
                                    <li key={item} className="flex items-center gap-2 text-slate-400">
                                        <CheckCircle size={16} className="text-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-4">The Philosophy</h2>
                    <p className="text-slate-400">
                        I believe that great code is not just about performance, but about clarity and maintainability.
                        Whether I'm training an RL model or styling a React component, I focus on building systems that
                        last and teams that thrive.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutPage;
