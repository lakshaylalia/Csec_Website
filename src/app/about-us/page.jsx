import React from "react";
import { Anton, Inria_Sans, Inria_Serif } from "next/font/google";

const inria2 = Inria_Serif({
  display: 'swap',
  subsets: ['latin'],
  weight: ["300", "400", "700"]
})

const inria = Inria_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const About = () => {
  return (
    <div className="flex lg:flex-row flex-col ">
      <div className="flex-1 px-6 pt-10 justify-center items-center">
        <img src="/about_us.jpg" className="rounded-2xl md:w-full" />
      </div>
      <div className="flex-1 flex-col">
        <h1 className={"text-3xl lg:text-6xl pt-10 pl-8 font-bold text-gray-400 " + (inria.className)}>
          ABOUT US
        </h1>
        <p className="text-2xl lg:text-3xl pl-8 pt-2 text-gray-300">What makes us unique?</p>
        <p className={"text-lg text-gray-300 lg:text-xl pl-8 pr-10 pt-2 " + (inria2.className)}>
          Our vibrant community is dedicated to exploring the vast world of technology, coding, and innovation. We offer a welcoming space for students of all skill levels to learn, collaborate, and grow together. From hands-on workshops and coding competitions to guest lectures and hackathons, our activities are designed to inspire and challenge.
          Whether you are interested in software development, artificial intelligence, cybersecurity, or any other tech field, you will find like-minded peers and valuable resources here. Join us to unlock your potential, share your passion, and make lasting connections in the world of computer science. Together, we are shaping the future of technology.
          Whether you are interested in software development, artificial intelligence, cybersecurity, or any other tech field, you will find like-minded peers and valuable resources here. Join us to unlock your potential, share your passion, and make lasting connections in the world of computer science. Together, we are shaping the future of technology.
          Whether you are interested in software development, artificial intelligence, cybersecurity, or any other tech field, you will find like-minded peers and valuable resources here. Join us to unlock your potential, share your passion, and make lasting connections in the world of computer science. Together, we are shaping the future of technology.

        </p>
      </div>
    </div>
  );
}

export default About;
