import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Star, Zap, Users, Shield, Award, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumButton from './PremiumButton';

const scheduleData = {
    'LUN': [
        { time: "06:00 AM", class: "CrossFit", intensity: "PRO", icon: <Zap className="w-6 h-6" />, color: "orange", aura: "rgba(249, 115, 22, 0.15)" },
        { time: "07:00 AM", class: "Fuerza", intensity: "MED", icon: <Award className="w-6 h-6" />, color: "blue", aura: "rgba(59, 130, 246, 0.15)" },
        { time: "05:00 PM", class: "Boxeo", intensity: "PRO", icon: <Shield className="w-6 h-6" />, color: "red", aura: "rgba(239, 68, 68, 0.15)" },
        { time: "06:00 PM", class: "CrossFit", intensity: "PRO", icon: <Zap className="w-6 h-6" />, color: "orange", aura: "rgba(249, 115, 22, 0.15)" },
    ],
    'MAR': [
        { time: "06:00 AM", class: "Fuerza", intensity: "MED", icon: <Award className="w-6 h-6" />, color: "blue", aura: "rgba(59, 130, 246, 0.15)" },
        { time: "07:00 AM", class: "Endurance", intensity: "MED", icon: <Users className="w-6 h-6" />, color: "green", aura: "rgba(34, 197, 94, 0.15)" },
        { time: "05:00 PM", class: "CrossFit", intensity: "PRO", icon: <Zap className="w-6 h-6" />, color: "orange", aura: "rgba(249, 115, 22, 0.15)" },
        { time: "06:00 PM", class: "Fuerza", intensity: "MED", icon: <Award className="w-6 h-6" />, color: "blue", aura: "rgba(59, 130, 246, 0.15)" },
    ],
    'MIÉ': [
        { time: "06:00 AM", class: "CrossFit", intensity: "PRO", icon: <Zap className="w-6 h-6" />, color: "orange", aura: "rgba(249, 115, 22, 0.15)" },
        { time: "07:00 AM", class: "Fuerza", intensity: "MED", icon: <Award className="w-6 h-6" />, color: "blue", aura: "rgba(59, 130, 246, 0.15)" },
        { time: "05:00 PM", class: "Boxeo", intensity: "PRO", icon: <Shield className="w-6 h-6" />, color: "red", aura: "rgba(239, 68, 68, 0.15)" },
        { time: "06:00 PM", class: "CrossFit", intensity: "PRO", icon: <Zap className="w-6 h-6" />, color: "orange", aura: "rgba(249, 115, 22, 0.15)" },
    ],
    'JUE': [
        { time: "06:00 AM", class: "Fuerza", intensity: "MED", icon: <Award className="w-6 h-6" />, color: "blue", aura: "rgba(59, 130, 246, 0.15)" },
        { time: "07:00 AM", class: "Endurance", intensity: "MED", icon: <Users className="w-6 h-6" />, color: "green", aura: "rgba(34, 197, 94, 0.15)" },
        { time: "05:00 PM", class: "CrossFit", intensity: "PRO", icon: <Zap className="w-6 h-6" />, color: "orange", aura: "rgba(249, 115, 22, 0.15)" },
        { time: "06:00 PM", class: "Fuerza", intensity: "MED", icon: <Award className="w-6 h-6" />, color: "blue", aura: "rgba(59, 130, 246, 0.15)" },
    ],
    'VIE': [
        { time: "06:00 AM", class: "CrossFit", intensity: "PRO", icon: <Zap className="w-6 h-6" />, color: "orange", aura: "rgba(249, 115, 22, 0.15)" },
        { time: "07:00 AM", class: "Fuerza", intensity: "MED", icon: <Award className="w-6 h-6" />, color: "blue", aura: "rgba(59, 130, 246, 0.15)" },
        { time: "05:00 PM", class: "Open Gym", intensity: "FREE", icon: <Users className="w-6 h-6" />, color: "slate", aura: "rgba(148, 163, 184, 0.15)" },
        { time: "06:00 PM", class: "WOD Social", intensity: "FUN", icon: <Star className="w-6 h-6" />, color: "lime", aura: "rgba(163, 230, 53, 0.15)" },
    ]
};

const days = ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE'];

const Schedule = () => {
    const [activeDay, setActiveDay] = useState('LUN');

    useEffect(() => {
        const dayIndex = new Date().getDay();
        const dayMap = { 1: 'LUN', 2: 'MAR', 3: 'MIÉ', 4: 'JUE', 5: 'VIE' };
        if (dayMap[dayIndex]) {
            setActiveDay(dayMap[dayIndex]);
        }
    }, []);

    return (
        <section id="horarios" className="py-32 bg-slate-950 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-lime-400/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-lime-400 font-black uppercase tracking-[0.3em] text-sm mb-4 block">
                        Weekly Routine
                    </span>
                    <div className="min-h-[120px] flex items-center justify-center">
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
                            Horario de <span className="animate-gradient-text">Entrenamiento</span>
                        </h2>
                    </div>
                    <div className="w-24 h-1 bg-lime-400 mx-auto mb-8" />
                </motion.div>

                {/* Day Selector - Premium Glass Tabs */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16">
                    {days.map((day) => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            className={`group relative px-8 py-4 rounded-2xl font-black text-lg transition-all duration-500 overflow-hidden ${activeDay === day
                                ? 'text-slate-950'
                                : 'text-slate-500 hover:text-white'
                                }`}
                        >
                            {/* Persistent border for inactive */}
                            {activeDay !== day && (
                                <div className="absolute inset-0 border border-slate-800 rounded-2xl group-hover:border-slate-600 transition-colors" />
                            )}

                            {/* Animated Background for active */}
                            <AnimatePresence>
                                {activeDay === day && (
                                    <motion.div
                                        layoutId="premiumTab"
                                        className="absolute inset-0 bg-gradient-to-br from-lime-400 to-lime-500 shadow-[0_0_20px_rgba(163,230,53,0.4)]"
                                        initial={false}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </AnimatePresence>

                            <span className="relative z-10 tracking-widest">{day}</span>
                        </button>
                    ))}
                </div>

                {/* Classes Grid - Ultra Premium Cards */}
                <div className="min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeDay}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        >
                            {scheduleData[activeDay].map((item, index) => (
                                <motion.div
                                    key={`${activeDay}-${index}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                    whileHover={{ y: -10 }}
                                    className="group relative"
                                >
                                    {/* Dynamic Aura Glow */}
                                    <div
                                        className="absolute inset-4 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                        style={{ backgroundColor: item.aura }}
                                    />

                                    <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/5 group-hover:border-lime-400/30 p-8 rounded-[2.5rem] h-full transition-all duration-500 flex flex-col shadow-2xl overflow-hidden">

                                        {/* Colored Accent Line */}
                                        <div className={`absolute top-0 left-0 w-2 h-full opacity-30 group-hover:opacity-100 transition-opacity bg-${item.color}-500`} />

                                        <div className="flex justify-between items-center mb-8">
                                            <div className="flex items-center gap-3 text-lime-400">
                                                <div className="p-2 rounded-lg bg-lime-400/10 border border-lime-400/20">
                                                    <Clock className="w-5 h-5" />
                                                </div>
                                                <span className="font-black text-xl tracking-tighter">{item.time}</span>
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 group-hover:text-lime-400 group-hover:border-lime-400/30 transition-colors">
                                                {item.intensity}
                                            </span>
                                        </div>

                                        <div className="mb-auto">
                                            <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-white/5 shadow-inner">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 group-hover:translate-x-1 transition-transform duration-300 leading-none">
                                                {item.class}
                                            </h3>
                                            <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">
                                                Top Tier Coaching
                                            </p>
                                        </div>

                                        {/* Interactive Footer of Card */}
                                        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between group/footer">
                                            <a
                                                href="#contact"
                                                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-lime-400 hover:text-white transition-colors duration-300"
                                            >
                                                <Calendar className="w-3 h-3" />
                                                Reservar Clase
                                            </a>
                                            <div className="w-8 h-8 rounded-full bg-lime-400/10 flex items-center justify-center group-hover/footer:bg-lime-400 group-hover/footer:text-slate-950 transition-all duration-500">
                                                <Zap className="w-4 h-4" />
                                            </div>
                                        </div>

                                        {/* Decorative Glass Reflection */}
                                        <div className="absolute -top-full -left-full w-full h-full bg-white/5 rotate-45 transform group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1000 pointer-events-none" />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 flex flex-col items-center"
                >
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link to="/horarios">
                            <PremiumButton icon={<ArrowRight className="w-5 h-5" />}>
                                Ver Horario Completo
                            </PremiumButton>
                        </Link>
                        <PremiumButton variant="secondary">
                            Descargar (PDF)
                        </PremiumButton>
                    </div>
                    <p className="mt-6 text-slate-600 font-bold text-xs uppercase tracking-widest">
                        Updated every month for max performance
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Schedule;
