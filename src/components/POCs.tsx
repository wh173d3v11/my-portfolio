import { Lightbulb, Navigation, Database, Smartphone, Network, ScanBarcode } from 'lucide-react';

export default function POCs() {
  const pocs = [
    {
      title: 'Offline-First MQTT Architecture',
      year: '2026',
      description: 'Developed a React Native proof of concept demonstrating offline-first capabilities. Engineered a local MQTT broker on-device to facilitate seamless inter-device communication and real-time data sharing completely independent of external internet connectivity.',
      tags: ['React Native', 'MQTT', 'Offline-First', 'P2P Sync'],
      icon: <Network className="w-6 h-6 text-cyan-400" />,
      color: 'from-cyan-500/20 to-teal-500/20'
    },
    {
      title: 'Semantic Medical Search via ObjectBox Vector DB',
      year: '2025',
      description: 'Embedded Semantic Search operating entirely client-side. Converted Excel medical records into MDB. Utilized MLKit OCR to scan tablet names, extracting vectors via Google Colab and 12b sentence models. Deployed onto mobile with ONNX bindings and ObjectBox for high-speed logistics tracking.',
      tags: ['ObjectBox', 'Vector DB', 'MLKit OCR', 'ONNX', 'Semantic Search'],
      icon: <Database className="w-6 h-6 text-amber-400" />,
      color: 'from-amber-500/20 to-yellow-500/20'
    },
    {
      title: 'KMP/CMP Technician Chatbot',
      year: '2025',
      description: 'A cross-platform technician assistant bridging complex native pipelines into a unified view. Used a custom native Scanflow OCR engine on the Android/iOS edges to scan documents, passing data seamlessly to the KMP/CMP shared UI logic for interaction with a custom backend AI chatbot.',
      tags: ['Kotlin Multiplatform', 'Compose Multiplatform', 'Native OCR', 'AI Chatbot'],
      icon: <Smartphone className="w-6 h-6 text-blue-400" />,
      color: 'from-blue-500/20 to-indigo-500/20',
      youtubeId: 'WQiSooUnji8'
    },
    {
      title: 'Retail Barcode Self-Checkout',
      year: '2023',
      description: 'Streamlining Shopping: The Future of Retail with Barcode Self-Checkout. High-speed product scanning system built to accelerate the retail experience utilizing edge-based vision architecture.',
      tags: ['Retail', 'Barcode Scanning', 'Edge Vision'],
      icon: <ScanBarcode className="w-6 h-6 text-purple-400" />,
      color: 'from-purple-500/20 to-pink-500/20',
      youtubeId: 'khP4OF63kIw'
    },
    {
      title: 'AR Indoor Navigation',
      year: '2022',
      description: 'Proof of concept leveraging Google ARCloud Anchors and ArCore/Sceneview to securely map and navigate complex indoor environments.',
      tags: ['ARCore', 'Sceneview', 'ARCloud'],
      icon: <Navigation className="w-6 h-6 text-pink-400" />,
      color: 'from-pink-500/20 to-rose-500/20',
      youtubeId: 'q8x_5KdG_XI'
    }
  ];

  return (
    <section id="pocs" className="py-20 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] -z-10" />

      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
          <Lightbulb className="w-8 h-8 text-emerald-500" />
          R&D and Proof of Concepts
        </h2>
        <p className="text-slate-400 text-lg">Exploring bleeding-edge technologies and experimental frontiers.</p>
      </div>

      <div className="flex flex-col gap-6">
        {pocs.map((poc, idx) => (
          <div key={idx} className="group relative p-8 rounded-3xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm overflow-hidden hover:border-slate-500/50 transition-all duration-300">
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${poc.color} rounded-full blur-[80px] -z-10 group-hover:scale-110 transition-transform duration-500`} />

            <div className="flex flex-col xl:flex-row xl:items-start gap-8">
              <div className="flex-grow flex flex-col md:flex-row md:items-start gap-6">
                <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/50 group-hover:scale-110 transition-transform shrink-0">
                  {poc.icon}
                </div>

                <div className="flex-grow">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-slate-100">{poc.title}</h3>
                    <span className="text-sm font-medium text-slate-400 bg-slate-800/50 border border-slate-700/50 px-3 py-1 rounded-full whitespace-nowrap">{poc.year}</span>
                  </div>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {poc.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {poc.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/50 border border-slate-700/50 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Inline YouTube Player */}
              {poc.youtubeId && (
                <div className="w-full xl:w-[480px] shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-black aspect-video relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${poc.youtubeId}`}
                    title={`${poc.title} Demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
