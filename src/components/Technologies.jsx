import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiFirebase } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = {
  hover: { scale: 1.1, rotate: 5 },
  tap: { scale: 0.95 },
};

const Technologies = () => {
  const techs = [
    { icon: RiReactjsLine, name: "React", color: "text-cyan-400" },
    {
      icon: TbBrandNextjs,
      name: "Next.js",
      color: "text-black dark:text-white",
    },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { icon: DiRedis, name: "Redis", color: "text-red-700" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
    { icon: SiFirebase, name: "Firebase", color: "text-yellow-500" },
  ];

  return (
    <div className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Technologies
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="rounded-2xl border-4 border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-900 shadow-lg"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <tech.icon className={`text-6xl ${tech.color}`} />
              </motion.div>
              <span className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
