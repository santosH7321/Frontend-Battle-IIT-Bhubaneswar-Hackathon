import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="pt-20 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <Hero />
        <Features />
        <Demo />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
