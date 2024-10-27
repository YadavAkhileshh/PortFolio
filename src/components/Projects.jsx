import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const categories = ["All", "Web", "SaaS", "AI"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="py-20 pt-24 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover md:w-48"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {project.title}
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex space-x-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <FaGithub className="mr-2" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
