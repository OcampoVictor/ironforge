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

                        {/* Google Maps Embed */}
                        <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9876543210123!2d-99.1332!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDcnNTkuNSJX!5e0!3m2!1ses!2smx!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale group-hover:grayscale-0 transition-all duration-1000"
                            ></iframe>
                            <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-1000 pointer-events-none" />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Av.+Siempre+Viva+742,+Springfield"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-lime-400 text-slate-950 px-6 py-3 rounded-full font-black uppercase tracking-widest flex items-center gap-2 hover:scale-110 transition-transform pointer-events-auto shadow-xl"
                                >
                                    <MapPin className="w-5 h-5" />
                                    Estamos aquí
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-6 justify-center lg:justify-start">
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400">Síguenos</span>
                            <div className="h-px w-12 bg-white/10" />
                            <a
                                href="https://instagram.com/ironforge.gym"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-slate-900 rounded-full border border-white/5 hover:border-lime-400/50 hover:text-lime-400 transition-all"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://facebook.com/ironforge.gym"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-slate-900 rounded-full border border-white/5 hover:border-blue-400/50 hover:text-blue-400 transition-all"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://wa.me/5215512345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-slate-900 rounded-full border border-white/5 hover:border-[#25D366]/50 hover:text-[#25D366] transition-all"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
