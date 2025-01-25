    "use client";

    import { useState, useEffect } from "react";
    import Link from "next/link";
    import { motion } from "framer-motion";
    import Image from "next/image";
    import { Inria_Sans, Poppins } from "next/font/google";
    import csecLogo from "../../public/csec.svg";

    const inria = Inria_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    display: "swap",
    });

    const poppins = Poppins({
    subsets: ["latin-ext"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    });

    export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 text-white/90 ${
            scrolled ? "bg-black/50 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        >
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
                href="/"
                className="text-2xl font-bold tracking-tight hover:text-primary transition-colors flex gap-2 items-center"
            >
                <Image
                alt="logo"
                src={csecLogo}
                width={1000}
                height={1000}
                className="w-14"
                />
                {scrolled && (
                <span
                    className={`font-light ${poppins.className}`}
                    style={{
                    textShadow: `
                        0 0 10px rgba(255,255,255,0.5),
                        0 0 20px rgba(255,255,255,0.3),
                        0 0 30px rgba(255,255,255,0.3)
                    `,
                    }}
                >
                    CSEC
                </span>
                )}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
                {["Home", "Gallery", "Team"].map((item) => (
                <Link
                    key={item}
                    href={item !== "Home" ? `/${item.toLowerCase()}` : "/"}
                    className={`text-2xl font-extralight hover:text-primary transition-colors mx-2 ${poppins.className}`}
                    style={{
                    textShadow: `
                        0 0 10px rgba(255,255,255,0.5),
                        0 0 20px rgba(255,255,255,0.3),
                        0 0 30px rgba(255,255,255,0.3)
                    `,
                    }}
                >
                    {item}
                </Link>
                ))}
            </div>

            {/* Hamburger Menu for Mobile */}
            <div
                className="hamburger md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div className={`line ${menuOpen ? "rotate-1" : ""}`}></div>
                <div className={`line ${menuOpen ? "hidden" : ""}`}></div>
                <div className={`line ${menuOpen ? "rotate-2" : ""}`}></div>
            </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            {["Home", "Gallery", "Team"].map((item) => (
                <Link
                key={item}
                href={item !== "Home" ? `/${item.toLowerCase()}` : "/"}
                className={`text-2xl font-extralight hover:text-primary transition-colors mx-2 ${poppins.className}`}
                onClick={() => setMenuOpen(false)} // Close menu on click
                >
                {item}
                </Link>
            ))}
            </div>
        </div>

        <style jsx>{`
            .hamburger {
            display: flex;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
            }

            .line {
            width: 30px;
            height: 3px;
            background-color: white;
            transition: transform 0.3s, opacity 0.3s;
            }

            .rotate-1 {
            transform: translateY(8px) rotate(45deg);
            }

            .rotate-2 {
            transform: translateY(-8px) rotate(-45deg);
            }

            .hidden {
            opacity: 0;
            }

            .mobile-menu {
            display: none;
            flex-direction: column;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.8);
            position: absolute;
            top: 80px;
            left: 0;
            right: 0;
            padding: 20px;
            z-index: 10;
            transition: transform 0.3s;
            transform: translateY(-100%);
            }

            .mobile-menu.open {
            display: flex;
            transform: translateY(0);
            }

            @media (min-width: 768px) {
            .mobile-menu {
                display: none;
            }
            }
        `}</style>
        </motion.nav>
    );
    }
