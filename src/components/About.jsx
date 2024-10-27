import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="py-20 pt-24 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
        </motion.h2>
        <div className="flex flex-wrap items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 mb-8 lg:mb-0"
          >
            <div className="relative">
              <img
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                src="https://images.unsplash.com/photo-1725969867661-cfd46d2f1395?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="about"
              />
              <div className="absolute inset-0 bg-indigo-600 opacity-20 rounded-lg"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:pl-12"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {ABOUT_TEXT}
            </p>
            <motion.a
              href="/path-to-your-cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300"
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
