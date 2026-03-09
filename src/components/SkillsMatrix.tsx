import { Layers, Smartphone, Cpu, Shield, Globe } from 'lucide-react';

export default function SkillsMatrix() {
  const categories = [
    {
      title: "Native Android",
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
      color: "from-emerald-500/10 to-transparent",
      skills: ["Java / Kotlin", "Jetpack Compose", "Navigation", "NDK", "Coroutines", "HILT & Koin", "Coil", "Room DB", "Paging3", "Firebase", "MVVM"]
    },
    {
      title: "React Native",
      icon: <Smartphone className="w-5 h-5 text-blue-400" />,
      color: "from-blue-500/10 to-transparent",
      skills: ["Typescript/Javascript", "AsyncStorage & MMKV", "React Hooks", "React Navigation (Native Stack)", "Saga & Redux", "Local Persistence", "Axios"]
    },
    {
      title: "Other Platforms",
      icon: <Globe className="w-5 h-5 text-indigo-400" />,
      color: "from-indigo-500/10 to-transparent",
      skills: ["Kotlin Multiplatform (KMP)", "Compose Multiplatform (CMP)", "Java Spring Boot (REST APIs)"]
    },
    {
      title: "Security & Architecture",
      icon: <Shield className="w-5 h-5 text-rose-400" />,
      color: "from-rose-500/10 to-transparent",
      skills: ["Proguard (Obfuscation)", "SSL Pinning", "Clean Architecture"]
    },
    {
      title: "Edge Technology",
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      color: "from-amber-500/10 to-transparent",
      skills: ["Vector Database", "WebRTC Framework", "ARCore & SceneView (Cloud Anchors, Faces)", "OpenCV"]
    },
    {
      title: "APIs & Libraries",
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      color: "from-purple-500/10 to-transparent",
      skills: ["Sockets & FCM", "Audio/Video Calling", "Lottie", "Google Maps", "Crashlytics", "ADA Compliance", "Dynamic Links & Analytics", "ExoPlayer"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
        <p className="text-slate-400 text-lg">A comprehensive overview of my frameworks, libraries, and architectural expertise.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, idx) => (
          <div key={idx} className="group relative p-6 rounded-3xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm overflow-hidden hover:border-slate-500/50 transition-colors">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} rounded-full blur-[40px] -z-10`} />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-slate-900/50 rounded-xl border border-slate-700/50">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-200">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-slate-900/50 border border-slate-700/50 rounded-lg text-xs font-medium text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
