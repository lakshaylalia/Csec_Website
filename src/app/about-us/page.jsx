"use client"

import React from "react"
import { Poppins, Sansita } from "next/font/google"
import { motion } from "framer-motion"
import "../../components/css/about.css"

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

const sansita = Sansita({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
})


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const About = () => {
  return (
    <section className={`about-section ${poppins.variable} `}>
      <motion.div
        className="about-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <motion.h1 className={`font-bold md:text-5xl text-2xl ${poppins.className}`} variants={fadeInUp}>
          ABOUT US
        </motion.h1>
        <motion.p className={`text-xl md:text-2xl ${sansita.className} `} variants={fadeInUp} transition={{ delay: 0.2 }}>
          What makes us unique?
        </motion.p>
        <div className="flex gap-10">
          <motion.div
            className="flex flex-col justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <p className={`text-lg md:text-xl ${sansita.className} `}>
            Our vibrant community is dedicated to exploring the vast world of technology, coding, and innovation. We offer a welcoming space for students of all skill levels to learn, collaborate, and grow together. Our mission is to foster a culture of continuous learning and curiosity, where everyone feels empowered to pursue their passion for technology.
              <br />
              <br />
              From hands-on workshops and coding competitions to guest lectures and hackathons, our activities are designed to inspire and challenge. We provide opportunities for members to engage with industry experts, work on real-world projects, and develop skills that are crucial for their future careers. Whether you are a seasoned coder or just starting your journey, CSEC is your platform to learn, create, and make a lasting impact in the world of technology.
              <br/>
              <br/>
              Join us to be part of a dynamic community that values innovation, creativity, and collaboration. Together, we strive to push the boundaries of what is possible and make meaningful contributions to the tech world. At CSEC, you will find the support, resources, and inspiration you need to achieve your goals and turn your ideas into reality.
            </p>
          </motion.div>
          <motion.div
            className=""
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
            className="rounded-2xl opacity-75 hidden md:block md:h-[30rem] md:w-[200rem] object-cover"
              src="csec.png"
              alt="CSEC Community"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

