import { Award, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Dynamically import all images from the folder
const imageModules = import.meta.glob('../assets/certificationsAndAwards/*.{png,jpg,jpeg}', { eager: true, import: 'default' });
const initialImages = Object.values(imageModules) as string[];

// Duplicate items to create a seamless infinite loop
const sliderImages = [...initialImages, ...initialImages, ...initialImages];

const bgColors = [
  "from-amber-500/20 to-yellow-500/20",
  "from-blue-500/20 to-indigo-500/20",
  "from-purple-500/20 to-pink-500/20",
  "from-emerald-500/20 to-teal-500/20"
];

export default function CertificationsAndAwards() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] -z-10" />

      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
          <Award className="w-8 h-8 text-amber-500" />
          Certifications & Awards
        </h2>
        <p className="text-slate-400 text-lg">Recognitions and continuous learning achievements.</p>
      </div>

      <div className="relative overflow-hidden w-full -mx-6 px-6 sm:mx-0 sm:px-0">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-6 w-max"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          }}
        >
          {sliderImages.map((imgSrc, idx) => {
            const color = bgColors[idx % bgColors.length];
            return (
              <div 
                key={idx} 
                className="group relative p-6 rounded-3xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm overflow-hidden hover:border-slate-500/50 transition-all duration-300 flex flex-col items-center w-[300px] md:w-[400px] shrink-0 cursor-pointer"
                onClick={() => setSelectedImage(imgSrc)}
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${color} rounded-full blur-[80px] -z-10 group-hover:scale-110 transition-transform duration-500`} />
                
                <div className="w-full h-48 md:h-64 flex items-center justify-center overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/50">
                  <img 
                    src={imgSrc} 
                    alt={`Award ${idx}`} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Full Screen Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12"
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-6 right-6 p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-full text-slate-300 hover:text-white transition-colors border border-slate-600/50"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-slate-700/50"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
