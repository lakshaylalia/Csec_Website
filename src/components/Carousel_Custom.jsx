"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Poppins, Inria_Serif } from "next/font/google"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Medal } from "lucide-react"
import axios from "axios"
import "../components/css/leaderboard.css"

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

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([])

  useEffect(() => {
    fetchLeaderboardData()
  }, [])

  const fetchLeaderboardData = async () => {
    try {
      const contestId = 1991
      const response = await axios.post("/api/fetch_user", contestId)
      setLeaderboardData(response.data)
    } catch (error) {
      console.error("Error fetching leaderboard data:", error)
      // Fallback to dummy data if API fails
      setLeaderboardData([
        { Rank: "1", Name: "rng_58", Score: "7974" },
        { Rank: "2", Name: "Zenith", Score: "6011" },
        { Rank: "3", Name: "OrOrZZZ!", Score: "5833" },
        { Rank: "4", Name: "Petr team", Score: "5792" },
        { Rank: "5", Name: "jcvb_matthew99", Score: "5731" },
        { Rank: "6", Name: "Excited", Score: "5403" },
        { Rank: "7", Name: "dreamoon_love_AA", Score: "5319" },
        { Rank: "8", Name: "step5", Score: "4951" },
        { Rank: "9", Name: "W4yneb0t", Score: "4762" },
        { Rank: "10", Name: "Gullesnuffs", Score: "4737" },
      ])
    }
  }

  const getAvatarColor = (rank) => {
    switch (rank) {
      case "1":
        return "gold"
      case "2":
        return "silver"
      case "3":
        return "bronze"
      default:
        return "gray"
    }
  }

  return (
    <section className={`leaderboard-section ${poppins.variable} ${inriaSerif.variable}`}>
      <div className="leaderboard-container">
        <motion.h2
          className={`leaderboard-title ${poppins.className}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Leaderboards
        </motion.h2>

        <div className="top-three">
          {leaderboardData.slice(0, 3).map((contestant, index) => (
            <motion.div
              key={contestant.Rank}
              className="top-contestant"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Avatar className={`avatar ${getAvatarColor(contestant.Rank)}`}>
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${contestant.Name}`} />
                <AvatarFallback>{contestant.Name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <p className={`contestant-name ${inriaSerif.className}`}>{contestant.Name}</p>
              <p className={`contestant-score ${poppins.className}`}>{contestant.Score}</p>
              <Medal className={`medal ${getAvatarColor(contestant.Rank)}`} />
            </motion.div>
          ))}
        </div>

        <div className="other-contestants">
          {leaderboardData.slice(3).map((contestant, index) => (
            <motion.div
              key={contestant.Rank}
              className="contestant-row"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <span className={`rank ${poppins.className}`}>{contestant.Rank}</span>
              <span className={`name ${inriaSerif.className}`}>{contestant.Name}</span>
              <span className={`score ${poppins.className}`}>{contestant.Score}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leaderboard

