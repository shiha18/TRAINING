import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Certifications", path: "/certifications" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl px-8 py-3 rounded-full",
        scrolled ? "glass-panel shadow-md" : "bg-white/5 border border-white/10 backdrop-blur-sm"
      )}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="accent-gradient p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight block leading-none text-white">
              TRAINING
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] block text-brand-azure">
              ABU DHABI
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-azure relative",
                location.pathname === link.path 
                  ? "text-brand-azure after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-brand-azure" 
                  : "text-slate-300"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="accent-gradient text-white px-5 py-2 rounded-full text-xs font-semibold hover:opacity-90 transition-all flex items-center gap-2 group shadow-lg shadow-blue-500/20"
          >
            Enroll Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 lg:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium py-2 border-b border-slate-50",
                    location.pathname === link.path ? "text-brand-azure" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-brand-blue text-white text-center py-4 rounded-xl font-bold mt-2"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
