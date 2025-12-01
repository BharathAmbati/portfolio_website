import { motion } from "motion/react";

const Navbar = () => {
    const links = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-zinc-950/50 backdrop-blur-md border-b border-white/5"
        >
            <div className="text-xl font-bold tracking-tighter text-white">
                Portfolio.
            </div>
            <ul className="flex gap-6">
                {links.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
