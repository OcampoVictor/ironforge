import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Quote, Star, Zap, Trophy, Heart, ArrowRight, MessageSquare } from 'lucide-react';
import PremiumButton from '../components/PremiumButton';

const stories = [
    {
        id: 1,
        name: "Carlos \"La Roca\"",
        discipline: "CrossFit Elite",
        metric: "+15kg Músculo",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        quote: "IronMind no es un gimnasio, es el lugar donde dejé de poner excusas y empecé a construir mi legado.",
        fullStory: "Llegué buscando un cambio físico, pero encontré una disciplina mental que transformó mi carrera y mi vida personal. La comunidad me empujó cuando pensaba que no podía más.",
        color: "lime"
    },
    {
        id: 2,
        name: "Elena Vargas",
        discipline: "Boxeo & HIIT",
        metric: "20% Menos Grasa",
        image: "https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?q=80&w=2070&auto=format&fit=crop",
        quote: "El boxeo me dio la confianza que el mundo me había quitado. Aquí recuperé mi fuerza interna.",
        fullStory: "Empecé con miedo al contacto, pero los coaches me guiaron paso a paso. Hoy, el ring es mi lugar de paz y superación.",
        color: "orange"
    },
    {
        id: 3,
        name: "Marco Ortiz",
        discipline: "Powerlifting",
        metric: "220kg Deadlift",
        image: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?q=80&w=2070&auto=format&fit=crop",
        quote: "La fuerza es una decisión. En IronMind encontré la plataforma perfecta para romper mis propios límites.",
        fullStory: "Después de una lesión, pensé que no volvería a levantar pesado. El enfoque en la técnica y la movilidad de este equipo me devolvió a la cima.",
        color: "blue"
    },
    {
        id: 4,
        name: "Sofía Luna",
        discipline: "Comunidad & Yoga",
        metric: "Movilidad Total",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop",
        quote: "Encontré el equilibrio perfecto entre la intensidad y la paz mental. Mi segunda casa.",
        fullStory: "Buscaba algo más que sudar. Quería sentirme bien. La vibra de la comunidad es lo que me hace volver cada mañana a las 6 AM.",
        color: "cyan"
    }
];

const StoriesPage = () => {
    return (
        <div className="bg-slate-950 min-h-screen text-white pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="max-w-4xl mb-20">
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
                        className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8"
                    >
                        Nuestras <br />
                        <span className="animate-gradient-text">Historias</span>
                    </motion.h1>
                    <p className="text-slate-400 text-xl font-bold leading-relaxed max-w-2xl">
                        Más que transformaciones físicas, celebramos la evolución del espíritu. Estas son las voces de quienes decidieron ir más allá.
                    </p>
                </div>

                {/* Stories Deep Dive */}
                <div className="space-y-40">
                    {stories.map((story, index) => (
                        <section key={story.id} className="relative">
                            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                                {/* Image Cinematic Side */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative w-full lg:w-1/2"
                                >
                                    <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 group">
                                        <img
                                            src={story.image}
                                            alt={story.name}
                                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                                        {/* Metric Badge */}
                                        <div className="absolute bottom-12 right-0 bg-lime-400 text-slate-950 px-8 py-4 rounded-l-full">
                                            <span className="text-xl font-black uppercase tracking-tighter">
                                                {story.metric}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Decorative Aura */}
                                    <div className={`absolute -inset-4 bg-${story.color}-400/5 blur-3xl rounded-full -z-10`} />
                                </motion.div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2 space-y-10">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-white/5">
                                                <Quote className="text-lime-400 w-5 h-5" />
                                            </div>
                                            <span className="text-lime-400 font-black uppercase tracking-[0.3em] text-xs">
                                                {story.discipline}
                                            </span>
                                        </div>

                                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 italic">
                                            "{story.quote}"
                                        </h2>

                                        <div className="space-y-6">
                                            <h3 className="text-2xl font-black text-white">{story.name}</h3>
                                            <p className="text-slate-400 text-lg leading-relaxed italic">
                                                {story.fullStory}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-8 mt-12">
                                            <div className="flex flex-col">
                                                <span className="text-2xl font-black text-white">450+</span>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">WODs Completados</span>
                                            </div>
                                            <div className="w-px h-10 bg-white/10" />
                                            <div className="flex flex-col">
                                                <span className="text-2xl font-black text-white">98%</span>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Asistencia</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                {/* Tribal Community Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-40 p-1 bg-gradient-to-br from-lime-400/20 to-transparent rounded-[4rem]"
                >
                    <div className="p-20 bg-slate-950 rounded-[3.8rem] text-center relative overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-lime-400/5 blur-[120px] rounded-full" />

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="flex -space-x-4 mb-10">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="w-16 h-16 rounded-full border-4 border-slate-950 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                                    </div>
                                ))}
                                <div className="w-16 h-16 rounded-full border-4 border-slate-950 bg-slate-900 flex items-center justify-center text-xs font-black text-lime-400">
                                    +200
                                </div>
                            </div>

                            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                                ¿ESTÁS LISTO PARA SER LA <br />
                                <span className="animate-gradient-text">PRÓXIMA HISTORIA?</span>
                            </h2>
                            <p className="text-slate-400 font-bold mb-12 max-w-xl text-lg">
                                Únete a la tribu. No importa de dónde vienes, importa hacia dónde vamos juntos.
                            </p>

                            <Link to="/contacto">
                                <PremiumButton icon={<ArrowRight className="w-5 h-5" />}>
                                    Empieza tu Transformación
                                </PremiumButton>
                            </Link>

                            <button className="mt-8 text-slate-500 hover:text-white transition-colors flex items-center gap-2 font-black uppercase tracking-widest text-xs">
                                <MessageSquare className="w-4 h-4" />
                                Compartir mi testimonio
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default StoriesPage;
