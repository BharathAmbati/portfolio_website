import { motion } from "motion/react";
import { Component as MorphingCardStack } from "@/components/ui/morphing-card-stack";
import { Database, BarChart3, Gamepad2, Activity } from "lucide-react";

const projects = [
    {
        id: "1",
        title: "RunX",
        description:
            "A modern web application built with Next.js and deployed on Vercel. Features a clean, responsive UI with optimized performance.",
        tags: ["Next.js", "React", "TypeScript", "Vercel"],
        link: "https://github.com/BharathAmbati/RunX",
        icon: <Activity className="h-6 w-6 text-cyan-400" />,
    },
    {
        id: "2",
        title: "Data Warehouse Project",
        description:
            "Built a Modern Data Warehouse using Medallion Architecture (Bronze, Silver, Gold layers). Designed ETL pipelines, created fact and dimension tables with Star Schema modeling, and developed SQL-based reports for analytics.",
        tags: ["SQL Server", "ETL", "Star Schema", "Data Modeling"],
        link: "https://github.com/BharathAmbati/data-warehouse-project",
        icon: <Database className="h-6 w-6 text-purple-400" />,
    },
    {
        id: "3",
        title: "Data Analytics Project",
        description:
            "End-to-end data analysis on sales and customer datasets. Performed data cleansing, exploratory analysis, and created interactive dashboards to visualize KPIs and business metrics.",
        tags: ["Python", "SQL", "Data Analysis", "Visualization"],
        link: "https://github.com/BharathAmbati/data-analytics-project",
        icon: <BarChart3 className="h-6 w-6 text-blue-400" />,
    },
    {
        id: "4",
        title: "Tic Tac Toe",
        description:
            "Interactive Tic Tac Toe game with a clean UI. Built to demonstrate front-end development skills and game logic implementation.",
        tags: ["JavaScript", "HTML", "CSS", "Game Dev"],
        link: "https://github.com/BharathAmbati/tic-tac-toe",
        icon: <Gamepad2 className="h-6 w-6 text-pink-400" />,
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Selected <span className="gradient-text">Work</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        A collection of projects showcasing my expertise in data engineering, 
                        analytics, and web development.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center"
                >
                    <MorphingCardStack cards={projects} />
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
