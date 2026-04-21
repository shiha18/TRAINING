import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919597946313"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-2xl shadow-[0_0_30px_rgba(37,211,102,0.3)] flex items-center justify-center group border border-white/20 backdrop-blur-sm"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap font-bold text-sm tracking-tight text-glow">
        Chat with us
      </span>
      <div className="absolute inset-0 rounded-2xl animate-ping bg-[#25D366] opacity-20 -z-10" />
    </motion.a>
  );
}
