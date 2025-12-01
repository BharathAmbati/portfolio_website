import { motion } from "motion/react";

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white mb-6"
                >
                    Get in Touch
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-zinc-400 mb-10 max-w-xl mx-auto"
                >
                    I'm currently open to new opportunities and collaborations. Whether you
                    have a question or just want to say hi, feel free to drop me a
                    message!
                </motion.p>

                <motion.a
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:hello@example.com"
                    className="inline-block px-8 py-4 bg-white text-zinc-950 font-bold rounded-full hover:bg-zinc-200 transition-colors"
                >
                    Say Hello
                </motion.a>

                <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
                    <p>© 2024 Bharath Reddy. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">
                            Twitter
                        </a>
                        <a
                            href="https://github.com/BharathAmbati"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            GitHub
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
