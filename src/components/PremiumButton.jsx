import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const PremiumButton = ({
    children,
    onClick,
    className = "",
    variant = "primary",
    icon,
    fullWidth = false
}) => {
    const buttonRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Magnetic effect values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center (magnetic effect)
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Limit movement to a small range
        mouseX.set(distanceX * 0.2);
        mouseY.set(distanceY * 0.2);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <motion.div
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            className={`${fullWidth ? 'w-full' : 'w-fit'} relative group`}
        >
            {/* Outer Glow Aura */}
            <motion.div
                className="absolute inset-0 rounded-full bg-lime-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
            />

            <button
                onClick={onClick}
                className={`
                    relative px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 overflow-hidden transition-all duration-300
                    ${variant === "primary" ? "bg-lime-400 text-slate-950" : "bg-white text-slate-950"}
                    ${fullWidth ? "w-full" : ""}
                    ${className}
                `}
            >
                {/* Cinematic Shimmer Effect */}
                <motion.div
                    className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none"
                    initial={{ x: "-100%" }}
                    animate={isHovered ? { x: "100%" } : { x: "-100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                <span className="relative z-10 flex items-center gap-2">
                    {children}
                    {icon && (
                        <motion.span
                            animate={isHovered ? { x: 5 } : { x: 0 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {icon}
                        </motion.span>
                    )}
                </span>

                {/* Pulsing Border Effect */}
                <motion.div
                    className="absolute inset-0 border-2 border-lime-400 rounded-full"
                    initial={{ scale: 1, opacity: 0 }}
                    animate={isHovered ? { scale: 1.1, opacity: 0.5 } : { scale: 1, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                />
            </button>
        </motion.div>
    );
};

export default PremiumButton;
