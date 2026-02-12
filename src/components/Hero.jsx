import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import PremiumButton from './PremiumButton';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                        alt="Gym Background"
                        className="w-full h-full object-cover opacity-40 font-sans"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-white drop-shadow-2xl"
                >
                    Forjado en <span className="animate-gradient-text">Hierro</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto font-light"
                >
                    Desbloquea tu verdadero potencial con equipamiento de élite y entrenamiento de clase mundial.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <PremiumButton
                        icon={<ArrowRight className="w-5 h-5" />}
                    >
                        EMPIEZA TU VIAJE
                    </PremiumButton>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
