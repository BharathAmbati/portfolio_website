import { motion } from "motion/react";
import { GraduationCap, Code2, Target, Heart } from "lucide-react";

const About = () => {
    const skills = [
        { name: "Prompt Engineering", category: "ai" },
        { name: "LLMs", category: "ai" },
        { name: "React", category: "web" },
        { name: "Next.js", category: "web" },
        { name: "TypeScript", category: "web" },
        { name: "Tailwind CSS", category: "web" },
        { name: "Python", category: "core" },
        { name: "SQL", category: "core" },
        { name: "Git", category: "tools" },
        { name: "Vercel", category: "cloud" },
    ];

    const highlights = [
        {
            icon: <GraduationCap className="w-5 h-5" />,
            title: "Education",
            description: "B.E. Computer Science",
            detail: "Thapar University • Class of 2026",
        },

        {
            icon: <Code2 className="w-5 h-5" />,
            title: "Web Dev",
            description: "Full Stack Developer",
            detail: "React • Next.js • TypeScript",
        },
        {
            icon: <Target className="w-5 h-5" />,
            title: "Data",
            description: "Data Engineer & Analyst",
            detail: "ETL • Warehousing • Visualization",
        },
        {
            icon: <Heart className="w-5 h-5" />,
            title: "Hobbies",
            description: "Active Lifestyle",
            detail: "Running • Gym • Skating • Badminton",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
        },
    };

    return (
        <section id="about" className="py-24 px-6 relative">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                        Computer Science student at Thapar University passionate about data,
                        web development, and AI. I build modern web apps, design data pipelines,
                        and craft intelligent AI solutions through prompt engineering.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -4 }}
                            className={`group p-6 rounded-2xl glass border border-white/5 hover:border-white/10 transition-all duration-300 ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                                }`}
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                                {item.title}
                            </p>
                            <h3 className="text-lg font-semibold text-white mb-1">
                                {item.description}
                            </h3>
                            <p className="text-sm text-zinc-400">
                                {item.detail}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-xl font-semibold text-white mb-6">
                        Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.03 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
                                }}
                                className="px-4 py-2 rounded-full text-sm font-medium glass border border-white/10 text-zinc-300 hover:text-white hover:border-purple-500/50 transition-all duration-300 cursor-default"
                            >
                                {skill.name}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
