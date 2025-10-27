import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Card({ title, icon = <Sparkles />, children, className = "" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl shadow-lg p-6 border border-white/40 backdrop-blur-md transition-all duration-300 ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="bg-white p-2 rounded-full shadow-md text-purple-600">
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-purple-800">{title}</h2>
      </div>
      <div className="mt-4 text-gray-700">{children}</div>
    </motion.div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`mt-2 text-gray-700 ${className}`}>{children}</div>;
}
