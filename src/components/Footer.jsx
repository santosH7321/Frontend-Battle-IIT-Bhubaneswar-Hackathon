import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center md:text-left space-y-3">
          <h3 className="text-2xl font-extrabold text-blue-600 dark:text-yellow-400">🚀 LaunchX</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Helping creators, developers and teams build, launch and scale their products with ease.
          </p>
        </div>
        <div className="text-center space-y-2">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#home" className="hover:text-blue-600 dark:hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#features" className="hover:text-blue-600 dark:hover:text-yellow-400 transition">Features</a></li>
            <li><a href="#demo" className="hover:text-blue-600 dark:hover:text-yellow-400 transition">Demo</a></li>
            <li><a href="#testimonials" className="hover:text-blue-600 dark:hover:text-yellow-400 transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-right space-y-2">
          <h4 className="text-lg font-semibold">Connect with us</h4>
          <div className="flex justify-center md:justify-end gap-4 text-2xl">
            <a
              href="https://x.com/santosH_sky01"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 hover:scale-110 transition-transform"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/santosH7321"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-800 dark:hover:text-white hover:scale-110 transition-transform"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/santosh7321/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-12 border-t border-gray-300 dark:border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} LaunchX. Crafted with ❤️ by Santosh Kumar.
      </div>
    </footer>
  );
};

export default Footer;
