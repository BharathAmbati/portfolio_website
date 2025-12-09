import { motion } from "motion/react";

const Hero = () => {
    // Letter animation for name
    const nameText = "Bharath Reddy.";
    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5 + i * 0.05,
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1] as const,
            },
        }),
    };

    return (
        <section
            id="hero"
            className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 overflow-hidden pt-16 gap-10 md:gap-16"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 grid-bg opacity-50" />
            
            {/* Gradient Orbs */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" 
            />
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
                className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" 
            />
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 2, delay: 0.6 }}
                className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" 
            />

            {/* Main Content */}
            <div className="z-10 max-w-2xl text-center md:text-left order-2 md:order-1">
                {/* Greeting */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-lg text-zinc-400 mb-2 tracking-wide"
                >
                    Hi, I'm
                </motion.p>

                {/* Animated Name */}
                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-4">
                    {nameText.split("").map((letter, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={letterVariants}
                            initial="hidden"
                            animate="visible"
                            className={letter === "." ? "gradient-text-animated" : ""}
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </h1>

                {/* Role with Gradient */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl font-semibold gradient-text-animated mb-6"
                >
                    Data Engineer • Web Developer • Prompt Engineer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                    className="text-base md:text-lg text-zinc-400 max-w-lg leading-relaxed"
                >
                    Transforming raw data into actionable insights. Building modern web applications and crafting intelligent AI solutions through prompt engineering.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                    className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative px-8 py-3.5 text-sm font-medium text-white rounded-full overflow-hidden neon-border-glow"
                    >
                        <span className="relative z-10">View Projects</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3.5 text-sm font-medium text-zinc-950 bg-white rounded-full hover:bg-zinc-100 transition-colors shimmer"
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="z-10 order-1 md:order-2"
            >
                <div className="relative">
                    {/* Image Container */}
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/10"
                    >
                        <img
                            src="/images/profile.jpg"
                            alt="Bharath Reddy"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
