import { BookOpen, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-slate-800 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-100">Let's Connect</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-md">
            I'm currently open for new opportunities to build scalable mobile solutions and cutting-edge edge compute logic.
          </p>

          <div className="space-y-6">
            <a href="https://medium.com/@fierydinesh" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors group">
              <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 group-hover:border-emerald-500/50 transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-lg font-medium">Medium Profile</span>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group">
              <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 group-hover:border-blue-500/50 transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-lg font-medium">LinkedIn Profile</span>
            </a>

            <div className="flex items-start gap-4 text-slate-300 group">
              <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 transition-colors mt-1">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <span className="block text-lg font-medium">Coimbatore, Tamil Nadu, India</span>
                <span className="block text-sm text-slate-500 mt-1">Languages: English, Tamil</span>
              </div>
            </div>

            <div className="flex items-start gap-4 text-slate-300 group mt-4">
              <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 transition-colors mt-1">
                <div className="w-6 h-6 flex items-center justify-center font-bold text-purple-400">🎓</div>
              </div>
              <div>
                <span className="block text-lg font-medium">B.E. Electronics & Communication</span>
                <span className="block text-sm text-slate-500 mt-1">Government College of Engineering, Tirunelveli</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end items-start md:items-end opacity-60">
          <p className="text-slate-500 font-medium mb-4">S. Dinesh - Senior Mobile Engineer</p>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-slate-600 text-sm mt-4">
            &copy; {new Date().getFullYear()} All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
