import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Image as ImageIcon, Sparkles, AlertCircle } from 'lucide-react';

const ApiDemoPage = () => {
    const [data, setData] = useState<{ imageUrl: string; caption: string; query: string } | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Use the local backend or the deployed one (as per PID)
    const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

    const generateContent = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${API_URL}/generate`);
            setData(response.data);
        } catch (err: any) {
            console.error(err);
            setError('Failed to connect to the backend. Please ensure the server is running.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="space-y-6 mb-12">
                <h1 className="text-4xl font-bold text-white">API Showcase</h1>
                <p className="text-slate-400 max-w-xl mx-auto">
                    Experience the integration of image retrieval and simulated AI captioning.
                    This page demonstrates full-stack communication between React and Express.
                </p>
                <button
                    onClick={generateContent}
                    disabled={loading}
                    className="bg-primary hover:bg-primary-dark disabled:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold transition-all inline-flex items-center gap-2 group shadow-xl shadow-primary/20"
                >
                    {loading ? (
                        <RefreshCw className="animate-spin" size={20} />
                    ) : (
                        <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                    )}
                    {loading ? 'Generating...' : 'Generate AI Image & Caption'}
                </button>
            </div>

            <div className="relative min-h-[400px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center gap-4 text-slate-500"
                        >
                            <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                            <p>Fetching from Backend...</p>
                        </motion.div>
                    ) : error ? (
                        <motion.div
                            key="error"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-red-900/20 border border-red-900/50 p-8 rounded-3xl text-red-400 flex flex-col items-center gap-4"
                        >
                            <AlertCircle size={48} />
                            <p>{error}</p>
                            <button
                                onClick={generateContent}
                                className="text-white bg-red-900/40 hover:bg-red-900/60 px-4 py-2 rounded-lg text-sm transition-colors"
                            >
                                Try Again
                            </button>
                        </motion.div>
                    ) : data ? (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-slate-900 border border-slate-800 p-4 rounded-[2rem] overflow-hidden shadow-2xl max-w-2xl w-full"
                        >
                            <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 group">
                                <img
                                    src={data.imageUrl}
                                    alt={data.query}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest font-bold">
                                    {data.query}
                                </div>
                            </div>
                            <div className="px-6 py-4 text-left">
                                <div className="flex items-center gap-2 text-primary mb-2">
                                    <Sparkles size={16} />
                                    <span className="text-xs font-bold uppercase tracking-wider">AI Generated Caption</span>
                                </div>
                                <p className="text-xl text-white font-medium italic leading-relaxed">
                                    "{data.caption}"
                                </p>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center gap-4 text-slate-600"
                        >
                            <div className="p-12 bg-slate-900/50 rounded-full border-2 border-dashed border-slate-800 text-slate-700">
                                <ImageIcon size={64} />
                            </div>
                            <p className="text-lg">Click the button above to start the demo</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ApiDemoPage;
