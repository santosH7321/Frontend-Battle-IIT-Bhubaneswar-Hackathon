import { useEffect, useRef } from "react";
import gsap from "gsap";

const Demo = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(videoRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        delay: 0.4,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="demo"
      ref={sectionRef}
      className="min-h-screen px-6 py-24 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black text-black dark:text-white flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl text-center mb-16">
        <h2 className="text-4xl font-extrabold text-blue-700 dark:text-yellow-400 mb-4">
          🚀 See It in Action
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
          Watch this quick demo to see how LaunchX powers fast, smooth, and scalable product launches.
        </p>
      </div>

      <div
        ref={videoRef}
        className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl backdrop-blur-lg bg-white/80 dark:bg-white/5"
      >
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Demo;
