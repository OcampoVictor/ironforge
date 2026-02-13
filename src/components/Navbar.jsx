import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PremiumButton from './PremiumButton';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const location = useLocation();

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Disciplinas', href: '/disciplinas' },
        { name: 'Horarios', href: '/horarios' },
        { name: 'Historias', href: '/historias' },
        { name: 'Contacto', href: '/contacto' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-lime-400 skew-x-[-10deg]"></div>
                    <span className="text-2xl font-black uppercase text-white tracking-tighter">
                        IRON<span className="text-lime-400">FORGE</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`text-sm font-bold uppercase tracking-widest transition-colors ${(location.pathname === link.href) ? 'text-lime-400' : 'text-slate-300 hover:text-lime-400'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contacto">
                        <PremiumButton className="!py-2 !px-6 !text-xs">
                            Únete Ahora
                        </PremiumButton>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-lime-400 transition-colors relative z-[60]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Spectacular Full-Screen Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 z-[55] bg-slate-950"
                    >
                        {/* Animated Background Gradient */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 2, opacity: 0.1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400 rounded-full blur-[150px]"
                        />

                        {/* Menu Content */}
                        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                            {/* Navigation Links */}
                            <div className="flex flex-col items-center gap-6 mb-12">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 50 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                    >
                                        <Link
                                            to={link.href}
                                            className={`text-5xl font-black uppercase tracking-tighter transition-all duration-300 ${(location.pathname === link.href)
                                                ? 'text-lime-400 scale-110'
                                                : 'text-white hover:text-lime-400 hover:scale-110'
                                                } block text-center`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                                    <PremiumButton className="!py-4 !px-12 !text-lg">
                                        Únete Ahora
                                    </PremiumButton>
                                </Link>
                            </motion.div>

                            {/* Decorative Elements */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 text-xs font-black uppercase tracking-[0.3em]"
                            >
                                Forjado en Hierro
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
