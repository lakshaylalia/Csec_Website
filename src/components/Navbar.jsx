"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Poppins, Sansita } from "next/font/google";
import csecLogo from "../../public/csec.svg";
import "./css/glitchText.css";

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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 text-white/90 ${
        scrolled ? "bg-black/50 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* Left: Logo */}
        <Link href="/">
          <Image src={csecLogo} alt="CSEC Logo" width={45} height={45} />
        </Link>

        {/* Center: Glitch Text (Always Centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <a
            href="https://hack.nith.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-6xl  text-red-600 sm:text-4xl md:text-5xl font-bold hover:text-red-500`}
            data-text="HACK"
          >
            HACK <span className="text-white/90">5.0</span>
          </a>
        </div>

        {/* Right: Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400 text-lg">
            Home
          </Link>
          <Link href="/gallery" className="hover:text-gray-400 text-lg">
            Gallery
          </Link>
          <Link href="/team" className="hover:text-gray-400 text-lg">
            Team
          </Link>
        </div>

        {/* Right: Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-7 h-7"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg shadow-lg">
          <div className="flex flex-col space-y-4 py-4 px-6">
            <Link
              href="/"
              className="text-lg hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="text-lg hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/team"
              className="text-lg hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              Team
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
