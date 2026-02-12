import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import PremiumButton from './PremiumButton';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-lime-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-lime-400 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                        Ponte en <span className="animate-gradient-text">Contacto</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        ¿Listo para comenzar tu transformación? Visítanos o envíanos un mensaje.
                        Tu viaje comienza con un simple paso.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-xl"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Nombre</label>
                                    <input
                                        type="text"
                                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors text-white"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors text-white"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Asunto</label>
                                <select className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors text-white">
                                    <option>Información General</option>
                                    <option>Membresías</option>
                                    <option>Clase de Prueba</option>
                                    <option>Entrenamiento Personal</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Mensaje</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors text-white resize-none"
                                    placeholder="¿En qué podemos ayudarte?"
                                ></textarea>
                            </div>

                            <PremiumButton
                                fullWidth
                                icon={<Send className="w-5 h-5" />}
                            >
                                Enviar Mensaje
                            </PremiumButton>
                        </form>
                    </motion.div>

                    {/* Contact Info & Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-lime-400/50 transition-colors">
                                <MapPin className="w-8 h-8 text-lime-400 mb-4" />
                                <h4 className="font-bold text-lg mb-2">Ubicación</h4>
                                <p className="text-slate-400 text-sm">Av. Siempre Viva 742, Springfield<br />Ciudad Deportiva</p>
                            </div>
                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-lime-400/50 transition-colors">
                                <Phone className="w-8 h-8 text-lime-400 mb-4" />
                                <h4 className="font-bold text-lg mb-2">Teléfono</h4>
                                <p className="text-slate-400 text-sm">+52 (55) 1234-5678<br />+52 (55) 8765-4321</p>
                            </div>
                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-lime-400/50 transition-colors">
                                <Mail className="w-8 h-8 text-lime-400 mb-4" />
                                <h4 className="font-bold text-lg mb-2">Email</h4>
                                <p className="text-slate-400 text-sm">info@ironforge.gym<br />ventas@ironforge.gym</p>
                            </div>
                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-lime-400/50 transition-colors">
                                <Clock className="w-8 h-8 text-lime-400 mb-4" />
                                <h4 className="font-bold text-lg mb-2">Horario</h4>
                                <p className="text-slate-400 text-sm">Lun - Vie: 5am - 11pm<br />Sab - Dom: 7am - 8pm</p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
