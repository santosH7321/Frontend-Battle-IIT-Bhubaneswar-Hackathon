import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Demo from "./components/Demo";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="pt-20 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <Hero />
        <Features />
        <Demo />

      </main>
    </>
  );
};

export default App;
