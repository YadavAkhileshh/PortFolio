import { useState, useEffect } from "react";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants/index.js";
import profilePic from "../assets/projects/profilepic-01.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const roles = ["Full Stack Developer", "Video Editor", "Content Creator"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let interval;
    if (displayedText.length < roles[currentRole].length) {
      interval = setInterval(() => {
        setDisplayedText(roles[currentRole].slice(0, displayedText.length + 1));
      }, 100);
    } else {
      clearInterval(interval);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setDisplayedText("");
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [currentRole, displayedText]);

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <h1 className="text-6xl lg:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Akhilesh Yadav
            </h1>
            <div className="relative">
              <h2 className="text-2xl lg:text-4xl font-semibold mb-4 text-gray-800 dark:text-gray-200 h-16">
                {displayedText}
                <span className="animate-blink">|</span>
              </h2>
            </div>
            <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-2xl">
              {HERO_CONTENT}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex space-x-6"
            >
              {[
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/yakhilesh/",
                  color: "text-blue-600",
                },
                {
                  icon: FaGithub,
                  href: "https://github.com/yakhilgithub",
                  color: "text-gray-800 dark:text-gray-200",
                },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/akhilyadav_019/",
                  color: "text-pink-600",
                },
                {
                  icon: FaTwitter,
                  href: "https://twitter.com/AkhileshYa81085",
                  color: "text-blue-400",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-8 h-8" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex flex-col items-center"
          >
            <img
              className="rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover shadow-2xl border-4 border-indigo-600 dark:border-indigo-400"
              src={profilePic}
              alt="Akhilesh Yadav"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-8 text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Let&#39;s Create Something Amazing!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
              Combining expertise in full-stack development, video editing, and content creation, I deliver a unique fusion of technical precision and creative vision to every project, turning ideas into impactful results.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300"
              >
                <Link to="/projects">View My Work</Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
