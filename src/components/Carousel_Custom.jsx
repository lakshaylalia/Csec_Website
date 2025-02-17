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


const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([])

  useEffect(() => {
    fetchLeaderboardData()
  }, [])

  const fetchLeaderboardData = async () => {
    try {
      const contestId = 1991
      const response = await axios.get("/api/fetch_user", contestId)
      setLeaderboardData(response.data)
    } catch (error) {
      console.error("Error fetching leaderboard data:", error)
      // Fallback to dummy data if API fails
      setLeaderboardData([
        { Rank: '1', Name: ' antrikshkatna03', },
        { Rank: '2', Name: 'harsh580g', },
        { Rank: '3', Name: 'Navdeep066', },
        { Rank: '4', Name: 'Tanishq_v010', },
        { Rank: '5', Name: 'himanshu12102004', },
        { Rank: '6', Name: 'kashu_06', },
        { Rank: '7', Name: 'srijansharma1605', },
        { Rank: '8', Name: 'Aryan3612_', },
        { Rank: '9', Name: 'Prashant_thakur77', },
        { Rank: '10', Name: 'Harry_0509', }
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
    <section className={`leaderboard-section ${poppins.variable} `}>
      <div className="leaderboard-container">
        <motion.h2
          className={`text-5xl font-bold flex justify-center text-center mb-10 ${poppins.className}`}
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
              <p className={`contestant-name `}>{contestant.Name}</p>
              <p className={`contestant-score `}>{contestant.Score}</p>
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
              <span className={``}>{contestant.Rank}</span>
              <span className={`name `}>{contestant.Name}</span>
              <span className={` `}>{contestant.Score}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leaderboard

