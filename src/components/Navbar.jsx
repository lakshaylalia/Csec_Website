"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Poppins, Sansita } from "next/font/google";
import csecLogo from "../../public/csec.svg";

const poppins = Poppins({
    subsets: ["latin-ext"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sansita = Sansita({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "700"],
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
            className={`fixed w-full z-50 transition-all duration-300 text-white/90 ${scrolled ? "bg-black/50 backdrop-blur-md shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link href="/">
                    <Image src={csecLogo} alt="CSEC Logo" width={50} height={50} />
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link href="/" className="hover:text-gray-400 md:text-2xl text-xl">
                        Home
                    </Link>
                    <Link href="/gallery" className="hover:text-gray-400 md:text-2xl text-xl">
                        Gallery
                    </Link>
                    <Link href="/team" className="hover:text-gray-400 md:text-2xl text-xl">
                        Team
                    </Link>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-black/50 backdrop-blur-md shadow-lg">
                    <div className="flex flex-col space-y-4 p-4">
                        <Link href="/" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                        <Link href="/gallery" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                            Gallery
                        </Link>
                        <Link href="/team" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                            Team
                        </Link>
                    </div>
                </div>
            )}
        </motion.nav>
    );
}