import React from "react";
import { useEffect, useRef } from "react";
import image1 from "../assets/image1.png";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef();

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power3.out",
    });
  });

  return () => ctx.revert(); 
}, []);


  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-10 bg-white dark:bg-black text-black dark:text-white"
    >
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Launch Your Product <br />
          <span className="text-blue-600 dark:text-yellow-400">Like a Pro 🚀</span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md">
          Discover the power of innovation with our next-gen product built for creators, developers, and dreamers.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-full transition cursor-pointer">
            Get Started
          </button>
          <button className="border border-blue-600 dark:border-yellow-400 text-blue-600 dark:text-yellow-400 hover:bg-blue-100 dark:hover:bg-yellow-900 font-medium py-2 px-5 rounded-full transition cursor-pointer">
            Watch Demo
          </button>
        </div>
      </div>

      <div className="flex-1">
        <img
          src={image1}
          alt="Product"
          className="w-full h-auto max-w-md mx-auto rounded-lg shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
