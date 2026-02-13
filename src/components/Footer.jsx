import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900 text-slate-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-lime-400 skew-x-[-10deg]"></div>
                            <span className="text-2xl font-black uppercase text-white tracking-tighter">
                                IRON<span className="text-lime-400">FORGE</span>
                            </span>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Forjamos atletas, construimos comunidad. El gimnasio donde tus límites se convierten en tu calentamiento.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://instagram.com/ironforge.gym" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-lime-400 hover:text-slate-950 transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://facebook.com/ironforge.gym" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-lime-400 hover:text-slate-950 transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com/ironforge_gym" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-lime-400 hover:text-slate-950 transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-lg">Enlaces Rápidos</h4>
                        <ul className="space-y-3">
                            {['Inicio', 'Disciplinas', 'Horarios', 'Sobre Nosotros', 'Contacto'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-lime-400 transition-colors flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-[2px] bg-lime-400 transition-all duration-300"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-lg">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-6 h-6 text-lime-400 flex-shrink-0" />
                                <span>Av. Siempre Viva 742, Springfield, Ciudad Deportiva</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-lime-400 flex-shrink-0" />
                                <span>+52 (55) 1234-5678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-lime-400 flex-shrink-0" />
                                <span>contacto@ironforge.gym</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-lg">Newsletter</h4>
                        <p className="mb-4 text-sm text-slate-400">Recibe consejos de entrenamiento y ofertas exclusivas.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors text-white placeholder-slate-500"
                            />
                            <button className="bg-white text-slate-950 font-bold py-3 rounded-lg hover:bg-lime-400 transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2 group">
                                Suscribirse
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; 2026 IRONFORGE GYM. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-lime-400 transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-lime-400 transition-colors">Términos</a>
                        <a href="#" className="hover:text-lime-400 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
