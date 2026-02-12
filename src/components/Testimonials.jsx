import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumButton from './PremiumButton';

const testimonials = [
    {
        name: "Alex R.",
        role: "Atleta de CrossFit",
        content: "Este gimnasio cambió mi vida. La comunidad es inigualable y el entrenamiento es de clase mundial.",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
    },
    {
        name: "Sarah M.",
        role: "Levantadora de Pesas",
        content: "El mejor equipamiento de la ciudad. Si te tomas en serio el levantamiento, este es el único lugar.",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "David K.",
        role: "Miembro desde 2021",
        content: "Limpio, duro y sin tonterías. Exactamente lo que buscaba en un gimnasio.",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Testimonials = () => {
    return (
        <section className="py-20 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center mb-16"
                >
                    Historias de <span className="animate-gradient-text">Miembros</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl relative border border-slate-800 hover:border-lime-400 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(163,230,53,0.1)] group"
                        >
                            {/* Decorative background quote */}
                            <Quote className="absolute top-4 right-4 text-slate-800 w-16 h-16 opacity-20 -z-10 transform -scale-x-100" />

                            <div className="absolute -top-6 left-8 w-14 h-14 rounded-full overflow-hidden border-2 border-slate-900 group-hover:border-lime-400 transition-colors shadow-xl">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            <p className="mt-8 text-slate-300 italic mb-6 leading-relaxed">"{item.content}"</p>

                            <div className="border-t border-slate-800 pt-4 mt-auto">
                                <h4 className="font-bold text-white uppercase tracking-wide group-hover:text-lime-400 transition-colors">{item.name}</h4>
                                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{item.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="text-center mt-20">
                    <Link to="/historias">
                        <PremiumButton icon={<ArrowRight className="w-5 h-5" />}>
                            Ver más historias
                        </PremiumButton>
                    </Link>
                </div>
            </div>

            {/* Background enhancement */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/20 via-slate-950 to-slate-950 -z-0 pointer-events-none"></div>
        </section>
    );
};

export default Testimonials;
