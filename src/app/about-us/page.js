import React from "react";

function About() {
  return (
    <div
      className="about relative min-h-screen w-full p-10 sm:p-12 text-white/80 flex flex-col items-center"
      style={{
        backgroundImage: `url('/img.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-screen-2xl mx-auto gap-2">
        <div className="text-6xl font-bold text-white text-center ">
          About Us
        </div>
      </div>
      <div
        className="relative z-10 flex flex-col sm:flex-row w-full max-w-screen-2xl mx-auto gap-2 mt-10"
        style={{ height: "565px" }}
      >
        <div className="flex-1 p-4 flex items-center justify-center ">
          <img
            src="/ig1.jpg"
            alt="image..."
            className="w-full h-full object-cover hidden sm:block "
          />
        </div>
        <div
          className="flex-1 p-4 flex flex-col justify-center"
          style={{ height: "632px" }}
        >
          <div className="text-4xl font-bold text-white sm:text-2xl">
            Computer Science Engineers Community
          </div>
          <br />
          <p>
            Our vibrant community is dedicated to exploring the vast world of
            technology, coding, and innovation. We offer a welcoming space for
            students of all skill levels to learn, collaborate, and grow
            together. From hands-on workshops and coding competitions to guest
            lectures and hackathons, our activities are designed to inspire and
            challenge.
          </p>
          <br />
          <p>
            Whether you're interested in software development, artificial
            intelligence, cybersecurity, or any other tech field, you'll find
            like-minded peers and valuable resources here. Join us to unlock
            your potential, share your passion, and make lasting connections in
            the world of computer science. Together, we're shaping the future of
            technology.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default About;
