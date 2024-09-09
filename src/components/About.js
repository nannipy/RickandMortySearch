import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <AnimatePresence>
      <motion.section 
        className="bg-white py-6 px-4 sm:py-12 sm:px-6 rounded-lg"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-6 text-black text-center"
            variants={fadeIn}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            🚀 Informazioni sul Progetto
          </motion.h2>
          
          <div className="space-y-6">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg"
              variants={fadeIn}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 dark:text-white">🔍 Cosa fa questa app?</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Questa applicazione ti permette di esplorare l'universo di Rick and Morty! Cerca i tuoi personaggi preferiti, scopri dettagli interessanti e immergiti in questo mondo fantastico. 🌌👽
              </p>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg"
              variants={fadeIn}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 dark:text-white">💻 Tecnologie utilizzate</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                <li>React ⚛️</li>
                <li>Tailwind CSS 🎨</li>
                <li>Framer Motion 🎭</li>
                <li>Rick and Morty API 🧪</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg"
              variants={fadeIn}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 dark:text-white">🌟 Caratteristiche principali</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Ricerca avanzata, filtri per specie e stato, design responsive, modalità dark/light, e molto altro! Esplora l'app per scoprire tutte le funzionalità nascoste. Wubba lubba dub dub! 🎉
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default About;