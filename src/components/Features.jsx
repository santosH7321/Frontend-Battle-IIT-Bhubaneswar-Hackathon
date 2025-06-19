import { useRef } from "react";
import { FaRocket, FaShieldAlt, FaMobileAlt, FaCode } from "react-icons/fa";
// import gsap from "gsap";

const features = [
  {
    icon: <FaRocket className="text-3xl text-blue-600 dark:text-yellow-400" />,
    title: "Fast Performance",
    desc: "Optimized for blazing-fast load times and smooth interactions.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-blue-600 dark:text-yellow-400" />,
    title: "Secure by Design",
    desc: "Built with modern security practices and standards.",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-blue-600 dark:text-yellow-400" />,
    title: "Mobile Responsive",
    desc: "Looks perfect on any screen size or device.",
  },
  {
    icon: <FaCode className="text-3xl text-blue-600 dark:text-yellow-400" />,
    title: "Developer Friendly",
    desc: "Clean codebase, componentized structure, and easy customization.",
  },
];

const Features = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

//   useEffect(() => {
//     // Animate each card with GSAP stagger
//     gsap.from(cardRefs.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       ease: "power3.out",
//       stagger: 0.2,
//     });
//   }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Features That Matter</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12">
          Everything you need to launch faster and smarter.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={(el) => {
                // Store each card DOM element into cardRefs
                if (el) cardRefs.current[i] = el;
              }}
              className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
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
