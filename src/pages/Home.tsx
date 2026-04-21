import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ShieldCheck, Trophy, Users, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import CourseCard from "@/src/components/CourseCard";

const featuredCourses = [
  {
    title: "Advanced CRM Mastery & Strategy",
    category: "Management",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    students: "1.2k",
    duration: "12 Weeks",
  },
  {
    title: "Network Security & Ethical Hacking",
    category: "Information Technology",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    students: "850",
    duration: "10 Weeks",
  },
  {
    title: "Supply Chain & Logistics Management",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    students: "2.1k",
    duration: "14 Weeks",
  },
];

const stats = [
  { label: "Students Trained", value: "15,000+", icon: Users },
  { label: "Course Completion", value: "98%", icon: CheckCircle2 },
  { label: "Job Placements", value: "92%", icon: Briefcase },
  { label: "Expert Instructors", value: "45+", icon: Trophy },
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/95 via-bg-dark/60 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-400 mb-8 uppercase tracking-widest text-[10px] font-bold">
              <ShieldCheck className="w-4 h-4" />
              #1 Certified Training Institute in Abu Dhabi
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 text-glow">
              Empowering <span className="blue-gradient-text italic font-serif">Careers</span> Through Industry Training
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
              Gain the skills international markets demand. From CRM to Data Analytics, our expert-led programs are designed to advance your professional journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/courses" 
                className="accent-gradient text-white font-bold px-10 py-5 rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-lg shadow-blue-500/20"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="glass-panel text-white border border-white/20 font-bold px-10 py-5 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Free Consultation
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-8 opacity-70">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white/10 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <p className="text-white text-sm font-medium">Join 15k+ successful alumni worldwide</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel text-center p-8 rounded-3xl group hover:border-blue-500/30 transition-all"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:accent-gradient group-hover:text-white transition-all">
                  <stat.icon className="w-7 h-7 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-slate-500 font-semibold text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Curriculum</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Certification Programs</h2>
            </div>
            <Link to="/courses" className="text-blue-400 font-bold flex items-center gap-2 hover:gap-4 transition-all pb-2 border-b-2 border-blue-400/30">
              View All Courses <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, i) => (
              <CourseCard 
                key={i} 
                title={course.title}
                category={course.category}
                image={course.image}
                rating={course.rating}
                students={course.students}
                duration={course.duration}
                index={i} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Facility" 
                className="w-full aspect-[4/3] object-cover opacity-70"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-blue/10" />
              <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="accent-gradient p-3 rounded-xl">
                    <GraduationCap className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Premier Learning Hub</h4>
                    <p className="text-blue-400 text-sm font-medium">State-of-the-art facilities</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="text-white">
              <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">Why Professionals Trust <br /> Training Abu Dhabi</h2>
              
              <div className="space-y-6">
                {[
                  { title: "Internationally Accredited", desc: "Our certificates are recognized by global industry giants and governmental bodies." },
                  { title: "Practical Workshop Approach", desc: "We focus on 20% theory and 80% practical execution to ensure job-readiness." },
                  { title: "Expert Practitioners", desc: "Learn from industry veterans who bring real-world challenges into the classroom." },
                  { title: "Career Placement Cell", desc: "Dedicated support for resume building, mock interviews, and job leads." },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-blue-500/10 p-2 rounded-lg shrink-0 mt-1 border border-blue-500/20">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button className="mt-12 glass-panel text-white font-bold px-10 py-5 rounded-xl hover:bg-white/10 transition-all">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="glass-panel rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 text-glow">Ready to Transform Your Career?</h2>
            <p className="text-xl text-slate-400 mb-12">
              Join our upcoming batch and start your journey towards becoming a certified professional in your field. Limited seats available!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="accent-gradient text-white font-bold px-12 py-5 rounded-xl hover:scale-[1.02] transition-all shadow-xl shadow-blue-500/20">
                Register Now
              </Link>
              <Link to="/contact" className="bg-white/5 border border-white/10 text-white font-bold px-12 py-5 rounded-xl hover:bg-white/10 transition-all">
                Request a Callback
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
