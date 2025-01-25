"use client"

import { Inria_Sans, Inria_Serif } from "next/font/google"
import { motion } from "framer-motion"

const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-inria-sans",
})

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-inria-serif",
})

export default function Landing() {
  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 ${inriaSans.variable} ${inriaSerif.variable}`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1
          className="text-5xl md:text-7xl font-bold mb-2 font-sans"
          style={{
            textShadow: `
            0 0 5px rgba(255,255,255,0.3),
            0 0 10px rgba(255,255,255,0.2),
            0 0 15px rgba(255,255,255,0.3)
          `,
          }}
        >
          TEAM
        </h1>
        <h1
          className="text-5xl md:text-7xl font-bold mb-8 font-sans"
          style={{
            textShadow: `
            0 0 5px rgba(255,255,255,0.3),
            0 0 10px rgba(255,255,255,0.2),
            0 0 15px rgba(255,255,255,0.3)
          `,
          }}
        >
          CSEC
        </h1>
      </motion.div>

      <motion.hr
        initial={{ width: 0 }}
        animate={{ width: "40%" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="border-t border-white my-8"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-xl md:text-2xl font-serif mb-8 text-center max-w-2xl"
      >
        Empowering the Future, One Code at a Time
      </motion.p>

      <motion.hr
        initial={{ width: 0 }}
        animate={{ width: "40%" }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="border-t border-white mb-8"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <a
          href="#learn-more"
          className="bg-white text-gray-900 px-6 py-3 rounded-full font-sans font-bold text-lg hover:bg-gray-200 transition-colors duration-300"
        >
          Learn More
        </a>
      </motion.div>
    </div>
  )
}

