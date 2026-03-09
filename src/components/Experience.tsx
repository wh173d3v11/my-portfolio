import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] -z-10" />

      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h2>
        <p className="text-slate-400 text-lg">Professional footprint and key contributions.</p>
      </div>

      <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12 pb-8">
        {/* Optisol Business Solutions */}
        <div className="relative pl-8 md:pl-12">
          {/* Timeline Dot */}
          <div className="absolute -left-[5px] top-1.5 w-[11px] h-[11px] rounded-full bg-blue-500 ring-4 ring-slate-900" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-100">Optisol Business Solutions, Pvt Ltd</h3>
              <p className="text-blue-400 font-medium flex items-center gap-2 mt-1">
                <Briefcase className="w-4 h-4" /> SOFTWARE ENGINEER - L2
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 text-slate-300 text-sm whitespace-nowrap">
              <Calendar className="w-4 h-4 text-slate-400" /> OCT 2022 - PRESENT
            </div>
          </div>

          <div className="bg-slate-800/20 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group hover:bg-slate-800/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] -z-10 group-hover:bg-blue-500/10 transition-all" />

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <strong className="text-slate-200">React & SDK Mastery:</strong> Working on a React Native project focused on cross-platform development and SDK development.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <strong className="text-slate-200">Platform Upgrades:</strong> Migrated the project to the latest Android support version.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <strong className="text-slate-200">WebRTC Fix & AAR:</strong> Resolved a bug in WebRTC Live Streaming and created a custom AAR - Google Camera Video streaming.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <strong className="text-slate-200">Performance & ADA:</strong> Implemented ADA (Americans with Disabilities Act) compliance standards and local caching and threading to boost app performance.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <strong className="text-slate-200">AI ChatBot with KMP/CMP:</strong> Building AI ChatBot product with Kotlin Multiplatform (KMP), Compose Multiplatform (CMP).
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Uynite, Inc. */}
        <div className="relative pl-8 md:pl-12">
          <div className="absolute -left-[5px] top-1.5 w-[11px] h-[11px] rounded-full bg-slate-700 ring-4 ring-slate-900" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-300">Uynite, Inc.</h3>
              <p className="text-slate-400 font-medium flex items-center gap-2 mt-1">
                <Briefcase className="w-4 h-4" /> ANDROID DEVELOPER
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/30 text-slate-500 text-sm whitespace-nowrap">
              <Calendar className="w-4 h-4 text-slate-600" /> May 2021 - Oct 2022
            </div>
          </div>

          <div className="bg-slate-800/10 border border-slate-700/30 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-70" />
                <span className="text-slate-400">Built a full social media app from the Scratch.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-70" />
                <span className="text-slate-400">Integrated APIs, Google Maps, and third-party libraries.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-70" />
                <span className="text-slate-400">Worked with product owners to design the UI using Figma.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-70" />
                <span className="text-slate-400">Managed the app to improve its features, ensuring a user-friendly experience.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-70" />
                <span className="text-slate-400">Worked closely with the CEO and CTO to develop key application logic.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-70" />
                <span className="text-slate-400">Developed and integrated the entire "Reels" concept in app.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
