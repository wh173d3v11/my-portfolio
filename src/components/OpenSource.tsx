import { GitPullRequest, Search, Star } from 'lucide-react';

export default function OpenSource() {
  return (
    <section id="opensource" className="py-20">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
          <GitPullRequest className="w-8 h-8 text-blue-500" />
          Publications & Open Source
        </h2>
        <p className="text-slate-400 text-lg">Impacting global standards and sharing knowledge.</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Technical Articles */}
        <div className="relative group p-8 md:p-12 rounded-3xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm overflow-hidden hover:border-emerald-500/50 transition-colors">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] -z-10 group-hover:bg-emerald-500/10 transition-all duration-500" />

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-100 mb-2">Technical Articles</h3>
            <p className="text-slate-400">Published popular blog posts on leading Android engineering platforms.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://medium.com/@fierydinesh/basics-of-mediapipe-for-android-platform-61fdf79d33a2" target="_blank" rel="noreferrer" className="block p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium mb-3">
                Medium
              </span>
              <h4 className="text-lg font-bold text-slate-200 mb-2">Basics of Mediapipe for Android Platform</h4>
              <p className="text-sm text-slate-400 flex items-center gap-1 mt-4">Read Article <Search className="w-3 h-3" /></p>
            </a>

            <a href="https://medium.com/proandroiddev/everything-about-arcloud-anchors-android-arcore-sceneview-66505bf9c7a6" target="_blank" rel="noreferrer" className="block p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium mb-3">
                ProAndroidDev
              </span>
              <h4 className="text-lg font-bold text-slate-200 mb-2">Everything about ArCloud Anchors Android — ArCore/Sceneview</h4>
              <p className="text-sm text-slate-400 flex items-center gap-1 mt-4">Read Article <Search className="w-3 h-3" /></p>
            </a>
          </div>
        </div>

        {/* WebRTC Contribution */}
        <div className="relative group p-8 md:p-12 rounded-3xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm overflow-hidden hover:border-blue-500/50 transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10 group-hover:bg-blue-500/20 transition-all duration-500" />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                <Star className="w-4 h-4" /> Major Contribution
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-2">WebRTC Core Engine Update</h3>
              <p className="text-slate-400 max-w-2xl leading-relaxed">
                Contributed a fix (`WebRtcAudioRecord.java`) to stop the Android 12+ green microphone indicator from persisting when the mic is muted. I've generated a custom AAR and successfully deployed it in production apps.
              </p>
            </div>

            <a href="https://webrtc-review.googlesource.com/c/src/+/340200" target="_blank" rel="noreferrer" className="shrink-0 inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-medium transition-colors border border-slate-700">
              <Search className="w-4 h-4" />
              View Source Fix
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/50">
              <span className="block text-xl font-bold text-slate-200 mb-1">Java Core</span>
              <span className="text-sm text-slate-500">Framework Modification</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/50">
              <span className="block text-xl font-bold text-slate-200 mb-1">A/V Indicator Fix</span>
              <span className="text-sm text-slate-500">Privacy UI Optimization</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/50">
              <span className="block text-xl font-bold text-slate-200 mb-1">Custom AAR</span>
              <span className="text-sm text-slate-500">Built & Used in Apps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
