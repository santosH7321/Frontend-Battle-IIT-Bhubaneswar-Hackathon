import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Clean any old refs
      cardRefs.current = cardRefs.current.slice(0, testimonials.length);

      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What People Are Saying</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Here's what users think about LaunchX.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((person, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardRefs.current[i] = el;
              }}
              className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold">{person.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{person.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                “{person.review}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
