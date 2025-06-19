import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="pt-20 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <Hero />
          
      </main>
    </>
  );
};

export default App;
