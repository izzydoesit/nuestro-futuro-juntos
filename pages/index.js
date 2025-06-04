// pages/index.js

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRing } from "react-icons/fa";

export default function Home() {
  const [showRing, setShowRing] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-yellow-50 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-rose-700 mb-6">
        Para Isabel, con todo mi amor
      </h1>

      <p className="max-w-2xl text-lg md:text-xl text-gray-700 mb-8">
        Este sitio es una carta abierta, una promesa, y una visión de todo lo que
        podemos construir juntos. Desde viajes inolvidables hasta un hogar lleno
        de amor y alegría. Aquí está mi corazón, mi plan y mi compromiso contigo.
      </p>

      <button
        className="px-6 py-3 text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-lg transition-all"
        onClick={() => setShowRing(true)}
      >
        Haz clic para ver mi promesa
      </button>

      <AnimatePresence>
        {showRing && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10 text-5xl text-amber-500"
          >
            <FaRing />
            <p className="text-xl text-gray-800 mt-4">
              Isabel, ¿aceptas construir este futuro conmigo?
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
