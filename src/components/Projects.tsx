import { motion } from "motion/react";
import { Component as MorphingCardStack } from "@/components/ui/morphing-card-stack";
import { Database, BarChart3, Globe, Layout } from "lucide-react";

const projects = [
    {
        id: "1",
        title: "Data Warehousing Project",
        description:
            "Designed a Data Warehouse with Bronze-Silver-Gold layered architecture and Star Schema modeling. Built robust ETL pipelines in SQL Server and PySpark to process CRM & ERP datasets.",
        tags: ["SQL Server", "PySpark", "SSMS", "T-SQL"],
        link: "#",
        icon: <Database className="h-6 w-6 text-purple-400" />,
    },
    {
        id: "2",
        title: "Data Analytics Project",
        description:
            "Performed end-to-end data analysis on sales and customer datasets. Developed interactive Tableau dashboards to visualize KPIs such as revenue growth and customer churn.",
        tags: ["Tableau", "Python", "SQL", "Excel"],
        link: "#",
        icon: <BarChart3 className="h-6 w-6 text-blue-400" />,
    },
    {
        id: "3",
        title: "E-Commerce Analytics",
        description:
            "Real-time dashboard for monitoring sales performance, inventory levels, and customer behavior patterns using React and D3.js.",
        tags: ["React", "D3.js", "Node.js"],
        link: "#",
        icon: <Globe className="h-6 w-6 text-green-400" />,
    },
    {
        id: "4",
        title: "CRM System Migration",
        description:
            "Led the migration of legacy CRM data to a modern cloud-based solution, ensuring data integrity and minimal downtime.",
        tags: ["Azure", "SQL", "Python"],
        link: "#",
        icon: <Layout className="h-6 w-6 text-orange-400" />,
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white mb-12"
                >
                    Selected Work
                </motion.h2>

                <div className="flex justify-center">
                    <MorphingCardStack cards={projects} />
                </div>
            </div>
        </section>
    );
};

export default Projects;
