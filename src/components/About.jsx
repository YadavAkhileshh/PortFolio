import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants/index";

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
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:pl-12"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {ABOUT_TEXT}
            </p>
            <motion.a
              href="/blank.pdf"
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
