import { motion } from "motion/react";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const Contact = () => {
    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/BharathAmbati",
            icon: <Github className="w-5 h-5" />,
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/bharathambati",
            icon: <Linkedin className="w-5 h-5" />,
        },
        {
            name: "Twitter",
            href: "https://twitter.com/bharathambati",
            icon: <Twitter className="w-5 h-5" />,
        },
    ];

    return (
        <section id="contact" className="py-24 px-6 relative">
            {/* Gradient line at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            
            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-zinc-400 text-lg mb-10 max-w-lg mx-auto">
                        I'm currently open to new opportunities and collaborations. 
                        Whether you have a question or just want to say hi, feel free to reach out!
                    </p>
                </motion.div>

                {/* Email CTA */}
                <motion.a
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="mailto:bharathreddyamabti21@gmail.com"
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-lg hover:shadow-purple-500/25 transition-shadow"
                >
                    <Mail className="w-5 h-5" />
                    <span>Say Hello</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </motion.a>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 flex justify-center gap-4"
                >
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="p-4 rounded-full glass border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
                            aria-label={link.name}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 pt-10 border-t border-white/5"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
                        <p>
                            © 2025 <span className="text-zinc-400">Bharath Reddy</span>. Crafted with passion.
                        </p>
                        <p className="flex items-center gap-2">
                            Built with
                            <span className="gradient-text font-medium">React</span>
                            +
                            <span className="gradient-text font-medium">Motion</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
