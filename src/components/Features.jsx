import { useRef } from "react";
import { FaRocket, FaShieldAlt, FaMobileAlt, FaCode } from "react-icons/fa";

const features = [
  {
    icon: <FaRocket className="text-white text-xl" />,
    title: "Fast Performance",
    desc: "Blazing-fast load times with smooth transitions built for users.",
  },
  {
    icon: <FaShieldAlt className="text-white text-xl" />,
    title: "Secure by Design",
    desc: "Top-tier security standards baked into every layer of the product.",
  },
  {
    icon: <FaMobileAlt className="text-white text-xl" />,
    title: "Mobile Responsive",
    desc: "Perfect layout and interaction across all screen sizes and devices.",
  },
  {
    icon: <FaCode className="text-white text-xl" />,
    title: "Developer Friendly",
    desc: "Modular, well-documented code structure optimized for scaling.",
  },
];

const Features = () => {
  const sectionRef = useRef();
  const cardRefs = useRef([]);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-gray-100 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-950 text-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-blue-700 dark:text-yellow-400">
          ✨ Features That Matter
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-16 max-w-2xl mx-auto text-sm sm:text-base">
          Everything you need to build, launch, and scale — crafted for creators, built for users.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="bg-white/70 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-xl hover:shadow-2xl transition duration-300 hover:scale-[1.03]"
            >
              <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 dark:bg-yellow-500 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-700 dark:text-yellow-300">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
