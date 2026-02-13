import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Dumbbell, Zap, Trophy, Activity, CheckCircle2 } from 'lucide-react';
import PremiumButton from '../components/PremiumButton';

const disciplines = [
    {
        id: "fuerza",
        title: "Fuerza Elite",
        subtitle: "Powerbuilding & Strength",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
        description: "Domina los levantamientos básicos y esculpe un físico imponente con nuestra zona de peso libre de última generación.",
        intensity: 90,
        benefits: ["Aumento de masa muscular", "Mejora de densidad ósea", "Técnica de powerlifting"],
        color: "lime"
    },
    {
        id: "crossfit",
        title: "CrossFit Box",
        subtitle: "High Intensity Training",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        description: "Prepárate para lo inesperado. Movimientos funcionales ejecutados a alta intensidad para un fitness completo.",
        intensity: 100,
        benefits: ["Resistencia cardiovascular", "Agilidad y coordinación", "Espíritu de comunidad"],
        color: "orange"
    },
    {
        id: "boxeo",
        title: "Boxeo Técnico",
        subtitle: "Combat & Conditioning",
        image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070&auto=format&fit=crop",
        description: "Libera el estrés y perfecciona tu golpeo. El acondicionado físico más exigente fuera de un ring profesional.",
        intensity: 85,
        benefits: ["Quema calórica masiva", "Reflejos de élite", "Defensa personal básica"],
        color: "red"
    },
    {
        id: "movilidad",
        title: "Movilidad & HIIT",
        subtitle: "Functional Movement",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop",
        description: "Mantén un cuerpo funcional y libre de lesiones. HIIT de bajo impacto combinado con flows de movilidad.",
        intensity: 70,
        benefits: ["Flexibilidad dinámica", "Core inquebrantable", "Recuperación activa"],
        color: "blue"
    }
];

const DisciplinesPage = () => {
    return (
        <div className="bg-slate-950 min-h-screen text-white pt-24 pb-20">
            {/* Header / Back Link */}
            <div className="container mx-auto px-4 mb-12">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-lime-400 hover:text-white transition-colors group mb-8"
                >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold uppercase tracking-widest text-sm">Volver al Inicio</span>
                </Link>

                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none"
                >
                    Nuestras <br />
                    <span className="animate-gradient-text">Disciplinas</span>
                </motion.h1>
            </div>

            {/* Disciplines Deep Dive */}
            <div className="space-y-32">
                {disciplines.map((item, index) => (
                    <section key={item.id} className="relative overflow-hidden">
                        <div className="container mx-auto px-4">
                            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                                {/* Image Cinematic Side */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative w-full lg:w-1/2 aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                                    {/* Intensity Badge */}
                                    <div className="absolute bottom-10 left-10 right-10 bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-xs font-black uppercase tracking-widest text-slate-400">Intensidad</span>
                                            <span className={`text-sm font-black text-${item.color}-400`}>{item.intensity}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.intensity}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className={`h-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.5)]`}
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2 space-y-8">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className={`text-lime-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block`}>
                                            {item.subtitle}
                                        </span>
                                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                                            {item.title}
                                        </h2>
                                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                            {item.description}
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                            {item.benefits.map((benefit, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-lime-400 flex-shrink-0" />
                                                    <span className="text-slate-200 font-bold text-sm tracking-wide">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link to="/contacto">
                                            <PremiumButton>
                                                Reservar Horario
                                            </PremiumButton>
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Bottom CTA */}
            <section className="mt-32 py-20 bg-lime-400 text-slate-950 text-center mx-4 rounded-[4rem]">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                        ¿LISTO PARA <br /> LA TRANSFORMACIÓN?
                    </h2>
                    <div className="flex justify-center">
                        <Link to="/contacto">
                            <PremiumButton variant="secondary" className="!bg-slate-950 !text-lime-400">
                                Empieza hoy mismo
                            </PremiumButton>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DisciplinesPage;
