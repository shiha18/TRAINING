import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, SlidersHorizontal, BookOpen, GraduationCap } from "lucide-react";
import CourseCard from "@/src/components/CourseCard";

const allCourses = [
  {
    title: "CRM Mastery & Customer Strategy",
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
  {
    title: "Data Analytics & Visualization with Python",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800",
    rating: 5.0,
    students: "3.4k",
    duration: "16 Weeks",
  },
  {
    title: "Digital Marketing & Brand Strategy",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    students: "1.8k",
    duration: "8 Weeks",
  },
  {
    title: "Project Management Professional (PMP)",
    category: "Management",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    students: "2.5k",
    duration: "12 Weeks",
  },
  {
    title: "Cloud Infrastructure Specialist (AWS/Azure)",
    category: "Information Technology",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    students: "1.1k",
    duration: "14 Weeks",
  },
  {
    title: "Financial Modeling & Valuations",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    students: "900",
    duration: "10 Weeks",
  },
];

const categories = ["All", "Management", "Information Technology", "Operations", "Data Science", "Marketing", "Finance"];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Academic Catalog</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight text-glow">
              Expand Your <span className="blue-gradient-text italic font-serif">Horizons</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Choose from over 50+ specialized certification programs curated by industry experts and tailored for Abu Dhabi's competitive job market.
            </p>
          </motion.div>
        </header>

        {/* Filters and Search */}
        <div className="glass-panel rounded-[2rem] p-4 md:p-8 mb-12 relative z-20">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative w-full lg:max-w-md group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search courses (e.g. CRM, Python...)" 
                className="w-full bg-slate-900/50 border border-white/10 focus:ring-1 focus:ring-blue-400/50 rounded-2xl py-4 flex items-center pl-12 text-white placeholder:text-slate-500 transition-all font-medium focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide no-scrollbar">
              <div className="flex items-center gap-2 text-white font-bold text-sm mr-2 shrink-0">
                <SlidersHorizontal className="w-4 h-4" />
                Filter:
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all
                    ${selectedCategory === category 
                      ? "accent-gradient text-white shadow-lg shadow-blue-500/20" 
                      : "bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10"}
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, i) => (
                <CourseCard 
                  key={course.title} 
                  title={course.title}
                  category={course.category}
                  image={course.image}
                  rating={course.rating}
                  students={course.students}
                  duration={course.duration}
                  index={i} 
                />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="text-slate-400 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-2">No courses found</h3>
                <p className="text-slate-500">Try adjusting your search terms or filters.</p>
                <button 
                  onClick={() => {setSearchTerm(""); setSelectedCategory("All");}}
                  className="mt-6 text-brand-azure font-bold underline"
                >
                  Reset all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Support Section */}
        <div className="mt-24 p-12 glass-panel rounded-[3rem] text-white relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="accent-gradient w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 italic font-serif">Not sure which course is right for you?</h2>
              <p className="text-slate-400 text-lg max-w-lg mb-8">
                Our academic counselors are available to help you choose the best path for your career goals.
              </p>
              <button className="accent-gradient text-white font-bold px-8 py-4 rounded-xl flex items-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-blue-500/20">
                Talk to an Expert
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h4 className="text-blue-400 font-bold text-2xl mb-1">50+</h4>
                <p className="text-slate-500 text-sm">Active Courses</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h4 className="text-blue-400 font-bold text-2xl mb-1">24/7</h4>
                <p className="text-slate-500 text-sm">Learning Access</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h4 className="text-blue-400 font-bold text-2xl mb-1">1:1</h4>
                <p className="text-slate-500 text-sm">Mentor Support</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h4 className="text-blue-400 font-bold text-2xl mb-1">100%</h4>
                <p className="text-slate-500 text-sm">Certification Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
