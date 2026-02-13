import { Dumbbell, Trophy, Activity, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumButton from './PremiumButton';

const disciplines = [
    {
        title: "Fuerza",
        icon: <Dumbbell className="w-10 h-10 text-lime-400" />,
        description: "Levantamiento pesado y zonas específicas de powerbuilding."
    },
    {
        title: "CrossFit",
        icon: <Activity className="w-10 h-10 text-lime-400" />,
        description: "Movimiento funcional de alta intensidad para un fitness total."
    },
    {
        title: "Boxeo",
        icon: <Trophy className="w-10 h-10 text-lime-400" />,
        description: "Clases de golpeo técnico y acondicionamiento."
    },
    {
        title: "Comunidad",
        icon: <Users className="w-10 h-10 text-lime-400" />,
        description: "Únete a una tribu de atletas dedicados."
    }
];

const Disciplines = () => {
    return (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center mb-16 px-4">
                    Nuestras <span className="animate-gradient-text">Disciplinas</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {disciplines.map((item, index) => (
                        <Link
                            key={index}
                            to="/disciplinas"
                            className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-lime-400/50 transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className="mb-6 bg-slate-900/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-lime-400/10 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-3 text-white">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed mb-4">{item.description}</p>
                            <div className="flex items-center gap-2 text-lime-400 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                Ver detalle
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link to="/disciplinas">
                        <PremiumButton icon={<ArrowRight className="w-5 h-5" />}>
                            Explorar Todas las Disciplinas
                        </PremiumButton>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Disciplines;
