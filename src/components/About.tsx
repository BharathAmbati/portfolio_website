import { motion } from "motion/react";

const About = () => {
    const skills = [
        "SQL",
        "Python",
        "Tableau",
        "Power BI",
        "Excel",
        "PySpark",
        "T-SQL",
        "PostgreSQL",
        "Git",
    ];

    return (
        <section id="about" className="py-24 px-6 bg-zinc-900/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                        I am a Computer Science student at Thapar University (Class of 2026)
                        with a strong passion for Data Engineering and Analytics. My
                        expertise lies in designing robust data warehouses, building ETL
                        pipelines, and creating insightful visualizations to drive
                        data-driven decision-making. I enjoy solving complex data problems
                        and optimizing workflows for efficiency.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-full text-sm border border-zinc-700 hover:border-zinc-500 transition-colors cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
