import { motion } from "motion/react";
import { ShieldCheck, Target, Eye, Users, Award, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight text-glow">
              Pioneering <span className="blue-gradient-text italic font-serif">Excellence</span> in Abu Dhabi's Education
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Founded with a mission to bridge the skill gap in the Middle East, Training Abu Dhabi has grown from a small local center to a premier institution recognized by global corporations.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              We believe that education should be practical, accessible, and directly linked to career growth. Our curriculum is constantly updated to match the evolving needs of industries like Fintech, Green Logistics, and Cybersecurity.
            </p>
            <div className="flex items-center gap-4">
              <div className="accent-gradient text-white p-3 rounded-2xl">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-white">KHDA Approved</h4>
                <p className="text-slate-500 text-sm">Certified Excellence in Training</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" 
              alt="Team at Training Abu Dhabi" 
              className="rounded-[3rem] shadow-2xl relative z-10 w-full h-[500px] object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="accent-gradient p-12 rounded-[3rem] text-white space-y-6 flex flex-col justify-center shadow-2xl shadow-blue-500/20">
            <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold italic font-serif text-glow">Our Mission</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              To empower individuals in Abu Dhabi and beyond with world-class professional training that translates into measurable career success and organizational growth.
            </p>
          </div>
          <div className="glass-panel p-12 rounded-[3rem] space-y-6 flex flex-col justify-center">
            <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center">
              <Eye className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white italic font-serif text-glow">Our Vision</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              To be the most trusted and innovative corporate training institute in the UAE, known for creating a future-ready workforce through transformative learning experiences.
            </p>
          </div>
        </div>

        {/* Values */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 text-glow">Values That Drive Us</h2>
            <p className="text-slate-500 max-w-xl mx-auto">We don't just teach; we mentor. Our core values are the foundation of every student's success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Uncompromising Quality", desc: "We maintain the highest standards in our course material and instructor selection." },
              { icon: Users, title: "Student-Centricity", desc: "Every decision we make is aimed at providing the best outcome for our learners." },
              { icon: Briefcase, title: "Practical Application", desc: "We focus on real-world scenarios and hands-on projects rather than just theory." },
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-panel p-10 rounded-[2.5rem] text-center border border-white/5 hover:border-blue-400/30 transition-all"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:accent-gradient group-hover:text-white transition-all text-blue-400">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Banner */}
        <div className="mt-20 p-12 lg:p-20 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="grid grid-cols-8 grid-rows-4 gap-4 w-full h-full">
              {[...Array(32)].map((_, i) => (
                <div key={i} className="bg-brand-azure w-full h-full rounded-full opacity-10" />
              ))}
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <GraduationCap className="w-12 h-12 text-brand-cyan mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic font-serif">Driven by Industry Leaders</h2>
            <p className="text-slate-400 text-lg mb-10">
              Our faculty consists of PhD holders, corporate trainers, and specialized professionals with decades of cumulative experience across MENA, Europe, and Asia.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <span className="block text-3xl font-bold text-brand-cyan">15+</span>
                <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Global Partners</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-brand-cyan">40+</span>
                <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Expert Faculty</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-brand-cyan">10y+</span>
                <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">In Business</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
