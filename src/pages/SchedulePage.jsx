import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Zap, Award, Shield, Users, Star, Filter, Calendar, Activity, ArrowRight } from 'lucide-react';
import PremiumButton from '../components/PremiumButton';

const scheduleData = {
    'LUN': [
        { time: "06:00", duration: 60, class: "CrossFit", intensity: "PRO", icon: <Zap className="w-4 h-4" />, color: "orange", category: "CrossFit" },
        { time: "07:00", duration: 60, class: "Fuerza", intensity: "MED", icon: <Award className="w-4 h-4" />, color: "blue", category: "Fuerza" },
        { time: "08:00", duration: 60, class: "Movilidad", intensity: "LOW", icon: <Activity className="w-4 h-4" />, color: "cyan", category: "Movilidad" },
        { time: "17:00", duration: 60, class: "Boxeo", intensity: "PRO", icon: <Shield className="w-4 h-4" />, color: "red", category: "Boxeo" },
        { time: "18:00", duration: 60, class: "CrossFit", intensity: "PRO", icon: <Zap className="w-4 h-4" />, color: "orange", category: "CrossFit" },
    ],
    'MAR': [
        { time: "06:00", duration: 60, class: "Fuerza", intensity: "MED", icon: <Award className="w-4 h-4" />, color: "blue", category: "Fuerza" },
        { time: "07:00", duration: 60, class: "Endurance", intensity: "MED", icon: <Users className="w-4 h-4" />, color: "green", category: "Movilidad" },
        { time: "17:00", duration: 60, class: "CrossFit", intensity: "PRO", icon: <Zap className="w-4 h-4" />, color: "orange", category: "CrossFit" },
        { time: "18:00", duration: 60, class: "Fuerza", intensity: "MED", icon: <Award className="w-4 h-4" />, color: "blue", category: "Fuerza" },
    ],
    'MIÉ': [
        { time: "06:00", duration: 60, class: "CrossFit", intensity: "PRO", icon: <Zap className="w-4 h-4" />, color: "orange", category: "CrossFit" },
        { time: "07:00", duration: 60, class: "Fuerza", intensity: "MED", icon: <Award className="w-4 h-4" />, color: "blue", category: "Fuerza" },
        { time: "17:00", duration: 60, class: "Boxeo", intensity: "PRO", icon: <Shield className="w-4 h-4" />, color: "red", category: "Boxeo" },
        { time: "18:00", duration: 60, class: "CrossFit", intensity: "PRO", icon: <Zap className="w-4 h-4" />, color: "orange", category: "CrossFit" },
    ],
    'JUE': [
        { time: "06:00", duration: 60, class: "Fuerza", intensity: "MED", icon: <Award className="w-4 h-4" />, color: "blue", category: "Fuerza" },
        { time: "07:00", duration: 60, class: "Endurance", intensity: "MED", icon: <Users className="w-4 h-4" />, color: "green", category: "Movilidad" },
        { time: "17:00", duration: 60, class: "CrossFit", intensity: "PRO", icon: <Zap className="w-4 h-4" />, color: "orange", category: "CrossFit" },
        { time: "18:00", duration: 60, class: "Fuerza", intensity: "MED", icon: <Award className="w-4 h-4" />, color: "blue", category: "Fuerza" },
    ],
    'VIE': [
        { time: "06:00", duration: 60, class: "CrossFit", intensity: "PRO", icon: <Zap className="w-4 h-4" />, color: "orange", category: "CrossFit" },
        { time: "07:00", duration: 60, class: "Fuerza", intensity: "MED", icon: <Award className="w-4 h-4" />, color: "blue", category: "Fuerza" },
        { time: "17:00", duration: 60, class: "Open Gym", intensity: "FREE", icon: <Users className="w-4 h-4" />, color: "slate", category: "Movilidad" },
        { time: "18:00", duration: 60, class: "WOD Social", intensity: "FUN", icon: <Star className="w-4 h-4" />, color: "lime", category: "CrossFit" },
    ]
};


const categories = ["Todos", "CrossFit", "Fuerza", "Boxeo", "Movilidad"];
const days = ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE'];

const SchedulePage = () => {
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    const isLive = (timeStr, dayName) => {
        const dayMap = { 'LUN': 1, 'MAR': 2, 'MIÉ': 3, 'JUE': 4, 'VIE': 5 };
        const now = currentTime;
        if (now.getDay() !== dayMap[dayName]) return false;

        const [hours, minutes] = timeStr.split(':').map(Number);
        const classStart = new Date(now);
        classStart.setHours(hours, minutes, 0);

        const classEnd = new Date(classStart);
        classEnd.setHours(hours + 1); // Assume 1 hour classes

        return now >= classStart && now < classEnd;
    };

    return (
        <div className="bg-slate-950 min-h-screen text-white pt-24 pb-20 overflow-x-hidden">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-lime-400 hover:text-white transition-colors group mb-8"
                    >
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold uppercase tracking-widest text-sm">Volver al Inicio</span>
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none"
                        >
                            Horarios de <br />
                            <span className="animate-gradient-text">Entrenamiento</span>
                        </motion.h1>

                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-2 text-slate-500 mb-2">
                                <Clock className="w-4 h-4" />
                                <span className="text-xs font-black uppercase tracking-[0.2em]">Live Status Active</span>
                            </div>
                            <div className="px-4 py-2 bg-slate-900/50 border border-white/5 rounded-xl backdrop-blur-md">
                                <span className="text-lime-400 font-black tracking-widest text-xl">
                                    {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter System */}
                <div className="flex flex-wrap gap-3 mb-12 p-2 bg-slate-900/30 backdrop-blur-md rounded-2xl border border-white/5 w-fit">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${selectedCategory === cat
                                ? 'bg-lime-400 text-slate-950 shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Full Week Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {days.map(day => (
                        <div key={day} className="space-y-6">
                            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                                <h2 className="text-2xl font-black text-white group-hover:text-lime-400 transition-colors">{day}</h2>
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Weekday</span>
                            </div>

                            <div className="space-y-4">
                                {scheduleData[day]
                                    .filter(item => selectedCategory === "Todos" || item.category === selectedCategory)
                                    .map((item, idx) => {
                                        const live = isLive(item.time, day);
                                        return (
                                            <motion.div
                                                key={`${day}-${idx}`}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className={`relative group p-4 rounded-2xl border transition-all duration-500 ${live
                                                    ? 'bg-lime-400/10 border-lime-400/50 shadow-[0_0_20px_rgba(163,230,53,0.1)]'
                                                    : 'bg-slate-900/40 border-white/5 hover:border-white/20'
                                                    }`}
                                            >
                                                {live && (
                                                    <div className="absolute -top-2 -right-2 flex items-center gap-1.5 bg-lime-400 text-slate-950 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest animate-bounce">
                                                        <div className="w-1.5 h-1.5 bg-slate-950 rounded-full animate-pulse" />
                                                        Live
                                                    </div>
                                                )}

                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className={`p-1.5 rounded-md bg-white/5 text-${item.color}-400 group-hover:scale-110 transition-transform`}>
                                                        {item.icon}
                                                    </div>
                                                    <span className={`text-xs font-black tracking-widest ${live ? 'text-lime-400' : 'text-slate-400'}`}>
                                                        {item.time}
                                                    </span>
                                                </div>

                                                <h3 className="text-lg font-black uppercase tracking-tighter mb-1 leading-none group-hover:text-lime-400 transition-colors">
                                                    {item.class}
                                                </h3>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                                                        {item.intensity} Intensity
                                                    </span>
                                                    <Link to="/#contact">
                                                        <button className="text-[9px] font-black uppercase text-lime-400 hover:text-white transition-colors">
                                                            Reservar
                                                        </button>
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        );
                                    })
                                }
                                {scheduleData[day].filter(item => selectedCategory === "Todos" || item.category === selectedCategory).length === 0 && (
                                    <div className="py-8 text-center border-2 border-dashed border-white/5 rounded-2xl">
                                        <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Sin clases</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 bg-slate-900/50 border border-white/5 rounded-[3rem] flex flex-col items-center text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/5 rounded-full blur-3xl" />
                    <div className="relative z-10 flex flex-col items-center">
                        <Calendar className="w-12 h-12 text-lime-400 mb-6 mx-auto" />
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                            Lleva tu rutina <br /> al bolsillo
                        </h2>
                        <p className="text-slate-400 font-bold mb-8 max-w-md mx-auto">
                            Descarga la versión oficial en PDF para tenerla siempre disponible sin conexión.
                        </p>
                        <PremiumButton variant="secondary">
                            Descargar Horario PDF
                        </PremiumButton>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SchedulePage;
