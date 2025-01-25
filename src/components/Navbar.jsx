"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Inria_Sans, Poppins } from "next/font/google"
import csecLogo from "../../public/csec.svg"
const inria = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
})

const poppins = Poppins({
    subsets: ["latin-ext"],
    weight: ["100","200","300","400","500","600","700","800","900"],
  });

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight hover:text-primary transition-colors flex gap-2 items-center"
          >
            <Image alt="logo" src={csecLogo} width={1000} height={1000} className="w-14 " />
            {scrolled && <span className={`font-light ${poppins.className}`}    style={{
              textShadow: `
                0 0 10px rgba(255,255,255,0.5),
                0 0 20px rgba(255,255,255,0.3),
                0 0 30px rgba(255,255,255,0.3)
              `,
            }}>CSEC</span>}
          </Link>

          <div className="hidden md:flex space-x-8">
            {["Home", "Gallery", "Team"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
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
        </div>
      </div>
    </motion.nav>
  )
}

