// src/App.jsx
import { motion } from "framer-motion";
import { Code2, Rocket } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
      <div className="text-center">

        {/* Animasi Framer Motion */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="bg-white text-slate-900 p-4 rounded-2xl inline-block mb-6"
        >
          <Rocket size={48} />
        </motion.div>

        <h1 className="text-4xl font-bold mb-4">
          Setup Berhasil! 🚀
        </h1>
        <p className="text-slate-400 flex items-center justify-center gap-2">
          <Code2 size={20} />
          React + Tailwind + Framer Motion
        </p>

        <button className="mt-8 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-full font-medium transition-colors">
          Mulai Ngoding
        </button>
      </div>
    </div>
  );
}