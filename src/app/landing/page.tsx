"use client"

import { Inria_Sans, Inria_Serif, Poppins } from "next/font/google"
import { motion } from "framer-motion"
import { useSpring, animated } from "react-spring"
import { useState, useEffect } from "react"
import Typewriter from "typewriter-effect"

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-inria-serif",
})

const backgroundImages = [
  "https://res.cloudinary.com/dtxjhtjv2/image/upload/v1737826104/pic5_yzrf3s.jpg",
  "https://res.cloudinary.com/dtxjhtjv2/image/upload/v1737457556/DSC_0964_jzqmuf.jpg",
]

export default function Landing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1))
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative min-h-screen ${poppins.variable} ${inriaSerif.variable} font-sans`}>
      <animated.div
        style={{
          ...props,
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          filter: "brightness(0.2)", // Darkened the image
        }}
      />
      <div className="relative z-10 flex flex-col justify-between items-center min-h-screen text-white p-4">
        <div className="flex-grow flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1
              className={`${poppins.className} text-7xl sm:text-8xl md:text-9xl font-extralight mb-8`}
              style={{
                textShadow: `
                  0 0 10px rgba(255,255,255,0.5),
                  0 0 20px rgba(255,255,255,0.3),
                  0 0 30px rgba(255,255,255,0.3)
                `,
                lineHeight: "1",
              }}
            >
              CSEC
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h2
              className={`${inriaSerif.className} font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide mb-4`}
            >
              <Typewriter
                options={{
                  strings: ["Computer Science Engineers Community"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 25,
                }}
              />
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-8"
        >
          <p className={`${poppins.className} text-lg sm:text-xl md:text-2xl font-light tracking-wider`}>
            Empowering the Future, One Code at a Time
          </p>
        </motion.div>
      </div>
    </div>
  )
}

