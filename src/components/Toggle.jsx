import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const newTheme = !isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
    </motion.button>
  );
};

export default Toggle;