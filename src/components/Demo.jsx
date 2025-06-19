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
        scale: 0.9,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.7)",
      });
    }, sectionRef); 

    return () => ctx.revert(); 
  }, []);
  return (
    <section
      id="demo"
      ref={sectionRef}
      className="min-h-screen px-6 py-20 bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">See It in Action</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Watch the demo below to understand how LaunchX can elevate your product.
        </p>
      </div>

      <div ref={videoRef} className="w-full max-w-3xl aspect-video shadow-xl rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700">
        <iframe
          width="100%"
          height="100%"
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
