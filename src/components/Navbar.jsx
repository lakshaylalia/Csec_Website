"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  const [showHackAd, setShowHackAd] = useState(true);
  const [glitchEffect, setGlitchEffect] = useState(false);

  const targetDate = new Date("2025-03-21T00:00:00").getTime();
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  function calculateTimeLeft() {
    const difference = targetDate - new Date().getTime();
    return {
      days: formatTime(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: formatTime(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatTime(Math.floor((difference / 1000 / 60) % 60)),
      seconds: formatTime(Math.floor((difference / 1000) % 60)),
    };
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : `${time}`;
  }

  // Set up timer interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Trigger glitch effect every few seconds
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Ultra-catchy Hack 5.0 Registration Ad */}
      <AnimatePresence>
        {showHackAd && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 hidden md:block duration-300 text-white/90 ${
              scrolled
                ? "bg-black/50 backdrop-blur-md shadow-lg"
                : "bg-transparent"
            }
style={{ width:}}
              {/* Content */}`}
          >
            <div className="flex items-center   justify-center">
              {" "}
              {/* Cyberpunk-inspired background with animated elements */}
              {/* Content */}
              <div className="container mx-auto px-4 py-3 relative z-10">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:justify-evenly">
                  <div className="flex items-center space-x-3 mb-2 md:mb-0 md:w-full">
                    {/* Glowing logo */}
                    <motion.div
                      className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full relative `}
                      style={{
                        filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))",
                      }}
                    >
                      <div>
                        {" "}
                        <Link href="/">
                          <Image
                            src={csecLogo}
                            alt="CSEC Logo"
                            width={50}
                            height={50}
                          />
                        </Link>
                      </div>
                    </motion.div>
                    <div className="h-7 w-px bg-gray-500 mx-3"></div>

                    <motion.div
                      className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full relative ${glitchEffect ? "translate-x-0.5" : ""}`}
                    >
                      <Image
                        src="https://res.cloudinary.com/dnbf0uwku/image/upload/v1741436045/colored-logo_2_bck2m6.png"
                        alt="CSEC Logo"
                        width={30}
                        height={30}
                      />
                    </motion.div>

                    {/* Glitchy text effect */}
                    <div>
                      <motion.div
                        className={`font-bold text-lg md:text-xl ${glitchEffect ? "text-red-400" : "text-cyan-400"}`}
                        style={{
                          textShadow: "0 0 5px rgba(6, 182, 212, 0.7)",
                          transform: glitchEffect ? "translateX(1px)" : "none",
                        }}
                      >
                        HACK_5.0{" "}
                        <span className="text-white text-opacity-90 text-sm md:text-base">
                          REGISTRATION
                        </span>
                      </motion.div>
                      <div className="flex items-center mt-1">
                        <div className="h-px bg-gradient-to-r from-cyan-400 to-transparent flex-grow"></div>
                        <span className="px-2 text-cyan-200 text-xs">
                          CODE • CREATE • CONQUER
                        </span>
                        <div className="h-px bg-gradient-to-l from-cyan-400 to-transparent flex-grow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="container items-center ">
                    <div className="hidden md:flex space-x-12 md:w-full">
                      <Link
                        href="/gallery"
                        className="hover:text-gray-400 md:text-2xl text-xl"
                      >
                        Gallery
                      </Link>
                      <Link
                        href="/team"
                        className="hover:text-gray-400 md:text-2xl text-xl"
                      >
                        Team
                      </Link>
                      <Link
                        href="/alumni"
                        className="hover:text-gray-400 md:text-2xl text-xl"
                      >
                        Alumni
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

                  <div className="flex items-center">
                    {/* Countdown timer */}
                    <div className="hidden md:flex mr-4 items-center space-x-2 text-md text-white ">
                      <div className="bg-black/40 px-2 py-1 rounded">
                        <div className="font-mono">{countdown.days}d</div>
                      </div>
                      <div className="bg-black/40 px-2 py-1 rounded">
                        <div className="font-mono">{countdown.hours}h</div>
                      </div>
                      <div className="bg-black/40 px-2 py-1 rounded">
                        <div className="font-mono">{countdown.minutes}m</div>
                      </div>
                    </div>

                    {/* CTA Button with neon effect */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mr-4 relative group"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                      <Link
                        href="https://hack.nith.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative bg-black px-4 py-2 rounded-md text-cyan-400 font-bold flex items-center group-hover:text-white transition-colors duration-200"
                      >
                        <button>Register</button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </motion.div>

                    {/* Close button */}
                    <button
                      onClick={() => setShowHackAd(false)}
                      className="text-gray-400 hover:text-white focus:outline-none transition-colors duration-200 hidden md:block"
                      aria-label="Close Hack 5.0 announcement"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar with adjusted position */}
      <motion.nav
        className={`fixed ${showHackAd ? "md:hidden" : "md:block"} w-full z-40 transition-all duration-300 text-white/90 ${
          scrolled
            ? "bg-black/50 backdrop-blur-md shadow-lg"
            : "bg-transparent "
        }`}
      >
        <div
          className={`container  mx-auto flex justify-between items-center p-4`}
        >
          <Link href="/">
            <Image src={csecLogo} alt="CSEC Logo" width={50} height={50} />
          </Link>

          <div className="hidden md:flex space-x-8 ">
            <Link
              href="/gallery"
              className="hover:text-gray-400 md:text-2xl text-xl"
            >
              Gallery
            </Link>
            <Link
              href="/team"
              className="hover:text-gray-400 md:text-2xl text-xl"
            >
              Team
            </Link>
            <Link
              href="/alumni"
              className="hover:text-gray-400 md:text-2xl text-xl"
            >
              Alumni
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
              <Link
                href="/gallery"
                className="hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/team"
                className="hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/alumni"
                className="hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                Alumni
              </Link>
            </div>
          </div>
        )}
      </motion.nav>

      {/* Add keyframes for animations */}
      <style jsx global>{`
        @keyframes digitalRain {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(60px);
            opacity: 0;
          }
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </>
  );
}
