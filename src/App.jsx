import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Toggle from "./components/Toggle";
import Freelance from "./components/Freelance";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden text-neutral-800 antialiased selection:bg-cyan-300 selection:text-cyan-900 dark:text-white dark:bg-gray-900 transition-colors duration-300">
        <Toggle />
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"></div>
          <div className="absolute top-0 right-0 h-96 w-96 -translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-br from-pink-200 to-indigo-300 opacity-30 blur-3xl dark:from-pink-700 dark:to-indigo-900 dark:opacity-20"></div>
          <div className="absolute bottom-0 left-0 h-96 w-96 translate-x-1/4 -translate-y-1/4 rounded-full bg-gradient-to-tr from-yellow-200 to-green-300 opacity-30 blur-3xl dark:from-yellow-700 dark:to-green-900 dark:opacity-20"></div>
        </div>
        <div className="relative z-10">
          <div className="container mx-auto px-8">
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/freelance" element={<Freelance />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
