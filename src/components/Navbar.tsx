import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const links = [
        { name: "Home", href: "#hero", id: "hero" },
        { name: "About", href: "#about", id: "about" },
        { name: "Projects", href: "#projects", id: "projects" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            // Update active section based on scroll position
            const sections = links.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section, index) => {
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(links[index].id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "py-3" : "py-4"
            }`}
        >
            <div className={`mx-4 md:mx-8 px-6 py-3 rounded-2xl transition-all duration-300 ${
                scrolled ? "glass-strong shadow-lg" : "glass"
            }`}>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        className="text-xl font-bold tracking-tight"
                        whileHover={{ scale: 1.02 }}
                    >
                        <span className="gradient-text-animated">B</span>
                        <span className="text-white">harath</span>
                        <span className="text-zinc-500">.</span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-1">
                        {links.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                                        activeSection === link.id
                                            ? "text-white"
                                            : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    {activeSection === link.id && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute inset-0 bg-white/10 rounded-lg"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden overflow-hidden"
                >
                    <ul className="pt-4 pb-2 flex flex-col gap-1">
                        {links.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                                        activeSection === link.id
                                            ? "text-white bg-white/10"
                                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
