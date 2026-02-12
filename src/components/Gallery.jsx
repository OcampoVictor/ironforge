import React from 'react';
import { motion } from 'framer-motion';

const imagesRow1 = [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", // Weight lifting
    "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop", // Dumbbells
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop", // Pushups
    "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=2070&auto=format&fit=crop", // Squats
];

const imagesRow2 = [
    "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085&auto=format&fit=crop", // Running
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop", // Barbell
    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop", // Gym interior
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop", // Yoga/Stretch
];

const Gallery = () => {
    return (
        <section className="py-20 bg-slate-950 overflow-hidden border-t border-slate-900 border-b">
            <div className="container mx-auto px-4 mb-16">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center mb-16">
                    Nuestra <span className="animate-gradient-text">Comunidad</span>
                </h2>
            </div>

            <div className="flex flex-col gap-8 opacity-80 hover:opacity-100 transition-opacity duration-500">
                {/* Row 1 - Moves Left */}
                <div className="flex overflow-hidden relative">
                    <motion.div
                        className="flex gap-4"
                        animate={{ x: "-50%" }}
                        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                        style={{ width: "fit-content" }}
                    >
                        {[...imagesRow1, ...imagesRow1].map((src, index) => (
                            <div key={index} className="w-[400px] h-[250px] flex-shrink-0 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 border border-slate-800">
                                <img src={src} alt="Gym Activity" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 - Moves Right */}
                <div className="flex overflow-hidden relative">
                    <motion.div
                        className="flex gap-4"
                        initial={{ x: "-50%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                        style={{ width: "fit-content" }}
                    >
                        {[...imagesRow2, ...imagesRow2].map((src, index) => (
                            <div key={index} className="w-[400px] h-[250px] flex-shrink-0 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 border border-slate-800">
                                <img src={src} alt="Gym Activity" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
