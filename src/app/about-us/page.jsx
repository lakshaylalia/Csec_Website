"use client"

import React from "react"
import { Poppins, Inria_Serif } from "next/font/google"
import { motion } from "framer-motion"
import "../../components/css/about.css"

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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const About = () => {
  return (
    <section className={`about-section ${poppins.variable} ${inriaSerif.variable}`}>
      <motion.div
        className="about-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <motion.h1 className="title" variants={fadeInUp}>
          ABOUT US
        </motion.h1>
        <motion.p className="subtitle" variants={fadeInUp} transition={{ delay: 0.2 }}>
          What makes us unique?
        </motion.p>
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <p className="description">
            Ready to turn bugs into features? We got you! Our community is where 'syntax errors' turn into 'wow i made this?” moments. 
              <br />
              <br />
              We bring you hands-on workshops to level up your coding skills, 
              hackathons that challenge you to think outside the box, 
              guest lectures from industry pros to drop some knowledge, 
              and competitive programming challenges to keep you on your toes. 

              Whether you&apos;re squashing bugs or building dreams, we make sure you&apos;re never alone on this tech journey,because coding is better with company (and caffeine)!
          </p>
          </motion.div>
          <motion.div
            className="about-image"
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
          >
            <img
              src="https://res.cloudinary.com/dtxjhtjv2/image/upload/v1737840220/csec_q6cmnn.webp"
              alt="CSEC Community"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

