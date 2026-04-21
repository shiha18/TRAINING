import { motion } from "motion/react";
import { ArrowRight, Star, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  key?: string | number;
  title: string;
  category: string;
  image: string;
  rating: number;
  students: string;
  duration: string;
  price?: string;
  index: number;
}

export default function CourseCard({ title, category, image, rating, students, duration, index }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative glass-panel rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 accent-gradient text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
          {category}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-blue-400 fill-blue-400" />
            {rating} (120+ reviews)
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {students} Students
          </div>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 min-h-[3.5rem]">
          {title}
        </h3>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
            <Clock className="w-4 h-4 text-brand-azure" />
            {duration}
          </div>
          <Link 
            to="/contact" 
            className="flex items-center gap-1 text-sm font-bold text-white hover:text-blue-400 transition-colors group/btn"
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
