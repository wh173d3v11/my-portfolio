import { MonitorPlay, Users, Star, Clock, ExternalLink } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: "Building Video Call App with WebRTC & Jetpack Compose Android for Beginners",
      description: "Master WebRTC setup, Jetpack Compose UI design, and Android navigation to build a robust video call app for beginners.",
      students: "34 Students",
      rating: "4.6",
      duration: "3 hours",
      color: "from-blue-500/20 to-purple-500/20",
      iconColor: "text-blue-400",
      url: "https://www.udemy.com/course/building-video-call-app-with-webrtc-jetpackcompose-android-kotlin/?referralCode=E3E143208777B5E3953B"
    },
    {
      title: "Compose Multiplatform Masterclass: Bridging Android & iOS",
      description: "Learn how seamlessly to bridge Android and iOS with CMP, building shared UIs, platform-specific screens & functionality.",
      students: "5 Students",
      rating: "0.0",
      duration: "2 hours",
      color: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
      url: "https://www.udemy.com/course/compose-multiplatform-masterclass-bridging-android-ios/?referralCode=9A689A06F3E391919F8E"
    }
  ];

  return (
    <section id="courses" className="py-20 relative">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
          <MonitorPlay className="w-8 h-8 text-purple-500" />
          Udemy Instructor
        </h2>
        <p className="text-slate-400 text-lg">Educating the next generation of Android and KMP developers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, idx) => (
          <a href={course.url} target="_blank" rel="noreferrer" key={idx} className="group relative p-8 rounded-3xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm overflow-hidden hover:border-slate-500/50 transition-all duration-300 flex flex-col h-full">
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${course.color} rounded-full blur-[80px] -z-10 group-hover:scale-110 transition-transform duration-500`} />

            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-slate-100 leading-snug pr-4">{course.title}</h3>
              <ExternalLink className="w-5 h-5 text-slate-500 shrink-0 group-hover:text-white transition-colors mt-1" />
            </div>

            <p className="text-slate-400 mb-8 flex-grow">
              {course.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 border-t border-slate-700/50 pt-6 mt-auto">
              <div className="flex items-center gap-2 text-slate-300">
                <Users className={`w-4 h-4 ${course.iconColor}`} />
                <span className="text-sm font-medium">{course.students} Students</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Star className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium">{course.rating} Rating</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-medium">{course.duration}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
