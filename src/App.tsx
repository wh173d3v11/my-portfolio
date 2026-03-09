import Hero from './components/Hero';
import SkillsMatrix from './components/SkillsMatrix';
import Experience from './components/Experience';
import Projects from './components/Projects';
import POCs from './components/POCs';
import Courses from './components/Courses';
import OpenSource from './components/OpenSource';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <header className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between shadow-2xl">
          <div className="font-bold text-xl tracking-tight text-white flex items-center gap-1">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">S. Dinesh</span>
            {/* <span className="text-blue-500">.</span> */}
          </div>
          <nav className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#pocs" className="hover:text-white transition-colors">R&D / POCs</a>
            <a href="#courses" className="hover:text-white transition-colors">Courses</a>
            <a href="#opensource" className="hover:text-white transition-colors">Open Source</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto flex flex-col gap-10 overflow-hidden">
        <Hero />
        <SkillsMatrix />
        <Experience />
        <Projects />
        <POCs />
        <Courses />
        <OpenSource />
        <Contact />
      </main>
    </div>
  );
}

export default App;

