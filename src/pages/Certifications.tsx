import { motion } from "motion/react";
import { Award, CheckCircle2, Globe, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const certificates = [
  {
    title: "Master Certified CRM Professional",
    issuer: "Global Business Institute",
    benefits: ["Customer data analysis mastery", "Strategy execution skills", "Salary boost of up to 30%"],
    icon: ShieldCheck
  },
  {
    title: "Accredited Information Security Officer",
    issuer: "Digital Security Foundation",
    benefits: ["ISO 27001 compliance expert", "Vulnerability assessment skills", "High demand in banking/gov"],
    icon: Award
  },
  {
    title: "Certified Supply Chain Expert (CSCE)",
    issuer: "Logistics Academy UAE",
    benefits: ["Regional supply chain optimization", "Free Zone operation knowledge", "Managerial roles eligibility"],
    icon: Globe
  },
  {
    title: "Senior Data Analytics Professional",
    issuer: "Data Science Council",
    benefits: ["Python & Tableau proficiency", "Predictive modeling capability", "Data-driven decision making"],
    icon: TrendingUp
  }
];

export default function Certifications() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Industry Recognition</span>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight text-glow">
              Certifications That <span className="blue-gradient-text italic font-serif">Command</span> Respect
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              Don't just complete a course—earn a globally recognized credential. Our certifications are mapped to international standards, providing you with a significant edge in the Abu Dhabi job market.
            </p>
          </motion.div>
        </header>

        {/* Impact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          <div className="lg:col-span-1 space-y-12">
            <h2 className="text-3xl font-bold text-white leading-tight italic font-serif text-glow">Why Earn a Professional Certification?</h2>
            
            <div className="space-y-8">
              {[
                { title: "Increased Earning Potential", desc: "Certified professionals in the UAE earn significantly more than their non-certified counterparts." },
                { title: "Global Portability", desc: "Our credentials are valid and respected across North America, Europe, and Asia." },
                { title: "Expert Authority", desc: "A formal certification validates your skills to employers and clients instantly." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="accent-gradient text-white p-2 rounded-lg shrink-0 h-fit mt-1">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-[2.5rem] group hover:border-blue-400/30 transition-all"
              >
                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:accent-gradient group-hover:text-white transition-all text-blue-400">
                  <cert.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 pb-4 border-b border-white/5">{cert.issuer}</p>
                
                <ul className="space-y-4">
                  {cert.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-slate-400 font-medium italic">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recognition Partners */}
        <section className="py-20 text-center">
          <h3 className="text-xs uppercase tracking-[0.5em] font-bold text-slate-400 mb-12">Our Certificates are recognized by</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {["ORACLE", "CISCO", "MICROSOFT", "AMAZON", "GOOGLE", "IBM"].map(partner => (
              <span key={partner} className="text-2xl font-bold tracking-tighter text-brand-blue">{partner}</span>
            ))}
          </div>
        </section>

        {/* Enrollment CTA */}
        <div className="mt-32 p-12 lg:p-20 glass-panel rounded-[3rem] text-white text-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-glow">Take the Next Small Step to a Massive Leap</h2>
            <p className="text-xl text-slate-400 mb-12 italic font-serif">
               "Invest in yourself. It pays the best interest." ~ Benjamin Franklin
            </p>
            <Link to="/contact" className="accent-gradient text-white font-bold px-12 py-5 rounded-xl hover:scale-[1.02] transition-all shadow-2xl inline-flex items-center gap-2">
              Apply for Certification <Award className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
