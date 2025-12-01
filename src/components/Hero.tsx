
import { motion } from "motion/react";

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 overflow-hidden pt-16 gap-10"
        >
            {/* Background Gradient Blob */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="z-10 max-w-2xl text-center md:text-left order-2 md:order-1">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl font-bold tracking-tighter text-white sm:text-7xl"
                >
                    Hi, I'm <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                        Bharath Reddy.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-6 text-lg text-zinc-400 sm:text-xl max-w-lg"
                >
                    Data Engineer & Analyst transforming raw data into actionable insights.
                    Passionate about building robust data pipelines and visualizations.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mt-10 flex gap-4 justify-center md:justify-start"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 text-sm font-medium text-white transition-all bg-white/10 border border-white/10 rounded-full hover:bg-white/20 hover:scale-105 active:scale-95 backdrop-blur-sm"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 text-sm font-medium text-zinc-950 transition-all bg-white rounded-full hover:bg-zinc-200 hover:scale-105 active:scale-95"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="z-10 order-1 md:order-2"
            >
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img
                        src="/images/profile.jpg"
                        alt="Bharath Reddy"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

