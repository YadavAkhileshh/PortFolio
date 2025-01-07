import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Toggle from './Toggle';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Tech', path: '/technologies' },
    { name: 'Freelance', path: '/freelance' },

  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            {/* nothing */}
          </Link>
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
            <Toggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;