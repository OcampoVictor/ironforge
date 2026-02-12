import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram, Facebook } from 'lucide-react';
import PremiumButton from '../components/PremiumButton';

const ContactPage = () => {
    const [formState, setFormState] = useState('idle'); // idle, sending, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('sending');
        setTimeout(() => setFormState('success'), 2000);
    };

    return (
        <div className="bg-slate-950 min-h-screen text-white pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="max-w-4xl mb-16">
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
                        className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6"
                    >
                        Hablemos de tu <br />
                        <span className="animate-gradient-text">Próximo Nivel</span>
                    </motion.h1>
                    <p className="text-slate-400 text-xl font-bold max-w-2xl leading-relaxed">
                        ¿Dudas sobre membresías, clases o entrenamiento personalizado? Nuestro equipo está listo para ayudarte a empezar hoy mismo.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    {/* Left Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-slate-900/50 p-8 md:p-12 rounded-[3rem] border border-white/5 relative overflow-hidden h-full"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/5 rounded-full blur-3xl" />

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">Nombre Completo</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Ej. Juan Pérez"
                                        className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-lime-400/50 focus:ring-4 focus:ring-lime-400/10 transition-all text-white placeholder:text-slate-600 font-bold"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">WhatsApp / Cel</label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="+52 ..."
                                        className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-lime-400/50 focus:ring-4 focus:ring-lime-400/10 transition-all text-white placeholder:text-slate-600 font-bold"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">Asunto de interés</label>
                                <select className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-lime-400/50 transition-all text-white font-bold appearance-none">
                                    <option>Saber más de Membresías</option>
                                    <option>Clase de Prueba Gratis</option>
                                    <option>Entrenamiento Personalizado</option>
                                    <option>Eventos y Comunidad</option>
                                </select>
                            </div>

                            <div className="space-y-4">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">Tu Mensaje</label>
                                <textarea
                                    rows="4"
                                    placeholder="¿En qué podemos ayudarte?"
                                    className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-lime-400/50 focus:ring-4 focus:ring-lime-400/10 transition-all text-white placeholder:text-slate-600 font-bold resize-none"
                                ></textarea>
                            </div>

                            <PremiumButton
                                type="submit"
                                className="w-full justify-center py-6"
                                icon={formState === 'sending' ? null : <Send className="w-5 h-5" />}
                                disabled={formState !== 'idle'}
                            >
                                {formState === 'idle' && "Enviar Mensaje"}
                                {formState === 'sending' && "Enviando..."}
                                {formState === 'success' && "¡Mensaje Enviado!"}
                            </PremiumButton>
                        </form>
                    </motion.div>

                    {/* Right Side: Info & Map */}
                    <div className="space-y-12">
                        {/* Contact Cards */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { icon: <Phone />, label: "WhatsApp", value: "+52 (55) 1234-5678", color: "lime" },
                                { icon: <Mail />, label: "Email", value: "hola@ironmind.com", color: "blue" },
                                { icon: <MapPin />, label: "Ubicación", value: "Av. Central 123, CDMX", color: "orange" },
                                { icon: <Clock />, label: "Horario", value: "Lun - Vie: 6am - 10pm", color: "cyan" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-slate-900/30 p-8 rounded-[2rem] border border-white/5 group hover:bg-slate-900 transition-colors"
                                >
                                    <div className={`text-${item.color}-400 mb-6 group-hover:scale-110 transition-transform`}>
                                        {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                                    </div>
                                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">{item.label}</h4>
                                    <p className="font-bold text-white text-lg">{item.value}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Interactive "Map" Mockup */}
                        <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 group">
                            <img
                                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop"
                                alt="Gym Location"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-1000" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-lime-400 text-slate-950 px-6 py-3 rounded-full font-black uppercase tracking-widest flex items-center gap-2 animate-bounce">
                                    <MapPin className="w-5 h-5" />
                                    Estamos aquí
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-6 justify-center lg:justify-start">
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400">Síguenos</span>
                            <div className="h-px w-12 bg-white/10" />
                            <a href="#" className="p-4 bg-slate-900 rounded-full border border-white/5 hover:border-lime-400/50 hover:text-lime-400 transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-4 bg-slate-900 rounded-full border border-white/5 hover:border-blue-400/50 hover:text-blue-400 transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-4 bg-slate-900 rounded-full border border-white/5 hover:border-orange-400/50 hover:text-orange-400 transition-all">
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
