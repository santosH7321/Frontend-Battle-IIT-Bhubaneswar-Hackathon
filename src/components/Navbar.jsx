import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false); 
  const navRef = useRef();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Demo", href: "#demo" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    const html = document.documentElement;
    if (newTheme) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(prefersDark);

    if (prefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
  const ctx = gsap.context(() => {
    const nav = navRef.current;

    gsap.fromTo(
      nav,
      { y: 0 },
      {
        y: -100,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
          onUpdate: (self) => {
            if (self.direction === -1) {
              // scrolling up → show navbar
              gsap.to(nav, { y: 0, duration: 0.4 });
            } else {
              // scrolling down → hide navbar
              gsap.to(nav, { y: -100, duration: 0.4 });
            }
          },
        },
      }
    );
  });

  return () => ctx.revert();
}, []);


  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-opacity-80 transition-all duration-300 ..."
>
      <nav
        ref={navRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16"
      >
        <a href="#home" className="text-white text-2xl font-extrabold tracking-tight">
          🚀 LaunchX
        </a>

        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white text-sm font-medium hover:text-yellow-300 transition-all duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={toggleTheme}
            className="text-white text-xl hover:text-yellow-300 transition"
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white text-2xl hover:text-yellow-300 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>


      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-600 via-blue-500 to-indigo-600 dark:from-gray-900 dark:to-black px-6 pt-2 pb-4 space-y-3 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-white text-base font-medium hover:text-yellow-300 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
