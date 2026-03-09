import { Award, ArrowRight, Github, Linkedin, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center items-start pt-20 relative">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -z-10" />

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm font-medium mb-8 backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
        <Award className="w-4 h-4 text-blue-400" />
        MVP Award Winner
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 max-w-4xl mb-6">
        Building the Future of <br className="hidden md:block" />
        Android, Edge & Automotive Tech.
      </h1>

      <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-10">
        Senior Software Engineer with <span className="text-slate-200 font-semibold">5+ years</span> experience specializing in{' '}
        <span className="text-slate-200 font-semibold">Native Android</span>,{' '}
        <span className="text-slate-200 font-semibold">React Native</span>,{' '}
        <span className="text-slate-200 font-semibold">Kotlin Multiplatform (KMP)</span>, and scaling systems for mobile. Passionate about transitioning expertise into <span className="text-blue-400 font-medium">Automotive HAL</span> and embedded platforms.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <a href="#projects" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20">
          View Projects
          <ArrowRight className="w-4 h-4" />
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-all border border-slate-700">
          Contact Me
        </a>
      </div>

      <div className="mt-16 flex items-center gap-6 text-slate-500">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="https://medium.com/@fierydinesh" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors" title="Medium Profile">
          <BookOpen className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
