import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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
                    <PremiumButton className="!py-2 !px-6 !text-xs">
                        Únete Ahora
                    </PremiumButton>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-lime-400 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-t border-slate-900 shadow-xl">
                    <div className="flex flex-col p-4 bg-slate-950">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="py-4 text-center font-bold uppercase text-slate-300 hover:text-lime-400 border-b border-slate-900 last:border-0"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <PremiumButton fullWidth className="mt-4">
                            Únete Ahora
                        </PremiumButton>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
