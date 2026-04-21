import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 mt-20 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="accent-gradient p-2 rounded-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight block leading-none text-white">TRAINING</span>
              <span className="text-[10px] font-bold tracking-[0.3em] block text-blue-400">ABU DHABI</span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Empowering professionals with industry-leading certifications and practical skills to excel in the global job market.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:accent-gradient hover:text-white hover:border-transparent transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-4">
            {["Home", "Courses", "Certifications", "About Us", "Contact"].map((link) => (
              <li key={link}>
                <Link 
                  to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "")}`} 
                  className="text-slate-500 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm font-medium"
                >
                  <div className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 mt-0.5 transition-all" />
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Top Courses</h4>
          <ul className="space-y-4">
            {["CRM Mastery", "Network Security", "Data Analytics", "Supply Chain Mgmt", "Digital Marketing"].map((course) => (
              <li key={course}>
                <Link to="/courses" className="text-slate-500 hover:text-blue-400 transition-colors text-sm font-medium block">
                  {course}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact Us</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <span className="text-slate-500 text-sm leading-relaxed">
                Hamdan bin Mohammed Street, <br /> Abu Dhabi, UAE
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400 shrink-0" />
              <a href="tel:+919597946313" className="text-slate-500 hover:text-white text-sm font-medium transición-colors">+91 95979 46313</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400 shrink-0" />
              <a href="mailto:shihama2004@gmail.com" className="text-slate-500 hover:text-white text-sm font-medium transition-colors">shihama2004@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
        <p className="opacity-60 font-medium">© {new Date().getFullYear()} Training Abu Dhabi. All rights reserved.</p>
        <div className="flex gap-8 font-bold">
          <a href="#" className="hover:text-blue-400 transition-colors opacity-60 hover:opacity-100 uppercase tracking-widest">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition-colors opacity-60 hover:opacity-100 uppercase tracking-widest">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
