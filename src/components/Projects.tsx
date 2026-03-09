import { Smartphone, Shield, PlayCircle, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'KDS App (Kitchen Display System)',
      description: 'A dedicated Kitchen Display System built using React Native to streamline order-taking and kitchen workflows. Facilitated seamless real-time syncing across restaurant verticals.',
      tags: ['React Native', 'Sockets', 'Real-time', 'Order Management'],
      icon: <Smartphone className="w-6 h-6 text-orange-400" />,
      color: 'from-amber-500/20 to-orange-500/20',
      imageUrl: 'https://images.unsplash.com/photo-1734352269335-db1d91e8e180?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Merchant App',
      description: 'An intuitive order-taking application designed for restaurants, streamlining the checkout and ticketing process. Built cross-platform for maximum reach.',
      tags: ['React Native', 'Restaurant POS', 'UI/UX', 'Payment Integration'],
      icon: <Smartphone className="w-6 h-6 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-500/20',
      imageUrl: 'https://images.unsplash.com/photo-1758519290189-b8a631e2fc0b?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'ADT+ Security App',
      description: 'Brings together the security of ADT with Nest Cams, Doorbells and Thermostats. Control everything globally including compatible smart devices.',
      tags: ['Native Android', 'WebRTC', 'Clean Architecture', 'IoT', 'Security'],
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      color: 'from-blue-500/20 to-cyan-500/20',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.adt.adtplus.prod&hl=en_IN',
      imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Scanflow',
      description: 'Smart scanning and workflow automation app that captures data quickly, processes it accurately, and routes it to automation pipelines.',
      tags: ['Native Android', 'NDK', 'OpenCV'],
      icon: <Smartphone className="w-6 h-6 text-purple-400" />,
      color: 'from-purple-500/20 to-pink-500/20',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.scanflow.demoapp&hl=en_IN',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Uynite Social App',
      description: 'A versatile social networking app featuring customizable privacy, secure group chats, and short-video sharing (Reels).',
      tags: ['React Native', 'Android', 'Java', 'Kotlin'],
      icon: <PlayCircle className="w-6 h-6 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-500/20',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.withuynite.uynite&hl=en_IN',
      imageUrl: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=800',
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
          <Smartphone className="w-8 h-8 text-blue-500" />
          Key Projects
        </h2>
        <p className="text-slate-400 text-lg">Delivering high-performance mobile and cross-platform solutions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative rounded-3xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm overflow-hidden hover:border-slate-500/50 transition-all duration-300 flex flex-col h-full">
            <div className={`absolute top-0 left-0 w-64 h-64 bg-gradient-to-br ${project.color} rounded-full blur-[80px] -z-10 group-hover:scale-110 transition-transform duration-500`} />

            {/* Image Section */}
            <div className="h-48 w-full bg-slate-800 relative overflow-hidden border-b border-slate-700/50">
              <img
                src={project.imageUrl}
                alt={`${project.title} Preview`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />

              <div className="absolute bottom-4 left-4 p-3 bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-700/50">
                {project.icon}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-100">{project.title}</h3>
                {project.playStoreLink && (
                  <a href={project.playStoreLink} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-emerald-400 transition-colors" title="View on Play Store">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>

              <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/50 border border-slate-700/50 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
