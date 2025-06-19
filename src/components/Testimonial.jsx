import { useRef } from "react";


const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "LaunchX made our product launch smoother than ever. The speed and UX were flawless. Highly recommended!",
  },
  {
    name: "Sana Kapoor",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The design system is clean and intuitive. It saved us weeks of work and the animations were butter smooth!",
  },
  {
    name: "Rishi Singh",
    role: "Developer Advocate",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    review:
      "Integrating LaunchX into our dev workflow was seamless. The docs and support are top-notch!",
  },
];

const Testimonial = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

 

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="min-h-screen px-6 py-24 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black text-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-3 text-blue-700 dark:text-yellow-400">
          What People Are Saying
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-16 text-sm max-w-xl mx-auto">
          Trusted by professionals from startups to enterprises.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((person, i) => (
            <div
              key={i}
              ref={(el) => el && (cardRefs.current[i] = el)}
              className="bg-white/70 dark:bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-600 dark:ring-yellow-400"
                />
                <div className="text-left">
                  <h4 className="text-lg font-bold">{person.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{person.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic relative pl-4">
                <span className="absolute left-0 text-xl text-blue-600 dark:text-yellow-400">“</span>
                {person.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
