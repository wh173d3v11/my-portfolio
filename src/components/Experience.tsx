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
        {/* Bluestaunch Services */}
        <div className="relative pl-8 md:pl-12">
          {/* Timeline Dot */}
          <div className="absolute -left-[5px] top-1.5 w-[11px] h-[11px] rounded-full bg-blue-500 ring-4 ring-slate-900" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-100">Bluestaunch Services Pvt Ltd</h3>
              <p className="text-blue-400 font-medium flex items-center gap-2 mt-1">
                <Briefcase className="w-4 h-4" /> SOFTWARE ENGINEER
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 text-slate-300 text-sm whitespace-nowrap">
              <Calendar className="w-4 h-4 text-slate-400" /> APR 2026 - PRESENT
            </div>
          </div>

          <div className="bg-slate-800/20 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group hover:bg-slate-800/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] -z-10 group-hover:bg-blue-500/10 transition-all" />

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <strong className="text-slate-200">Offline-First App:</strong> Developing the Brisque Client Offline enterprise application using Android (Java) and React Native, with MQTT and offline capabilities.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <strong className="text-slate-200">Capacitor Deployment:</strong> Published and maintained the web app as native iOS and Android apps using Capacitor, shipping to the Play Store and App Store.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <strong className="text-slate-200">Module Development:</strong> Developed new modules, enhanced existing features, and fixed production issues for enterprise customers.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <strong className="text-slate-200">Optimization & Stability:</strong> Improved application stability through debugging, root cause analysis, and code optimization.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <strong className="text-slate-200">Agile Collaboration:</strong> Worked closely with QA, product owners, and client teams to deliver feature enhancements on schedule.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Optisol Business Solutions */}
        <div className="relative pl-8 md:pl-12">
          <div className="absolute -left-[5px] top-1.5 w-[11px] h-[11px] rounded-full bg-slate-700 ring-4 ring-slate-900" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-300">Optisol Business Solutions Pvt Ltd</h3>
              <p className="text-slate-400 font-medium flex items-center gap-2 mt-1">
                <Briefcase className="w-4 h-4" /> SOFTWARE ENGINEER
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/30 text-slate-500 text-sm whitespace-nowrap">
              <Calendar className="w-4 h-4 text-slate-600" /> OCT 2022 - MAR 2026
            </div>
          </div>

          <div className="bg-slate-800/10 border border-slate-700/30 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-70" />
                <span className="text-slate-400">
                  <strong className="text-slate-300">Cross-Platform Apps:</strong> Built cross-platform mobile apps using React Native and Kotlin.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-70" />
                <span className="text-slate-400">
                  <strong className="text-slate-300">AI Chatbot:</strong> Developed an AI chatbot using Kotlin Multiplatform (KMP) and Compose Multiplatform.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-70" />
                <span className="text-slate-400">
                  <strong className="text-slate-300">Live Streaming:</strong> Implemented WebRTC live streaming with performance optimizations.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-70" />
                <span className="text-slate-400">
                  <strong className="text-slate-300">Real-time Messaging:</strong> Designed real-time communication using MQTT and WebSockets.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-70" />
                <span className="text-slate-400">
                  <strong className="text-slate-300">Performance Tuning:</strong> Improved app performance by 30%, reducing load time from 5s to 2s using caching, threading, and optimized APIs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-70" />
                <span className="text-slate-400">
                  <strong className="text-slate-300">SDK & Migration:</strong> Developed reusable SDK modules and migrated legacy components.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Uynite Inc. */}
        <div className="relative pl-8 md:pl-12">
          <div className="absolute -left-[5px] top-1.5 w-[11px] h-[11px] rounded-full bg-slate-700 ring-4 ring-slate-900" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-300">Uynite Inc.</h3>
              <p className="text-slate-400 font-medium flex items-center gap-2 mt-1">
                <Briefcase className="w-4 h-4" /> ANDROID DEVELOPER
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/30 text-slate-500 text-sm whitespace-nowrap">
              <Calendar className="w-4 h-4 text-slate-600" /> MAY 2021 - OCT 2022
            </div>
          </div>

          <div className="bg-slate-800/10 border border-slate-700/30 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-70" />
                <span className="text-slate-400">
                  <strong className="text-slate-300">Social Networking:</strong> Built a social networking app from scratch using Kotlin and MVVM.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-70" />
                <span className="text-slate-400">
                  <strong className="text-slate-300">Short Video (Reels):</strong> Implemented a short video (Reels) feature with media optimization.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-70" />
                <span className="text-slate-400">
                  <strong className="text-slate-300">Core Features:</strong> Developed chat, event management, and Google Maps features.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-70" />
                <span className="text-slate-400">
                  <strong className="text-slate-300">Memory & Lifecycle:</strong> Improved stability by fixing memory leaks and lifecycle issues.
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
