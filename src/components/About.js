import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-grey-900 dark:bg-grey-900 rounded-lg shadow-lg py-10 px-10 ">
      <div className=" mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-white text-center py-3"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          🚀 Informazioni sul Progetto
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 bg-white dark:bg-white rounded-lg p-6 shadow-lg">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 dark:text-white  ">🔍 Cosa fa questa app?</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Questa applicazione ti permette di esplorare l'universo di Rick and Morty! Cerca i tuoi personaggi preferiti, scopri dettagli interessanti e immergiti in questo mondo fantastico. 🌌👽
            </p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">💻 Tecnologie utilizzate</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>React ⚛️</li>
              <li>Tailwind CSS 🎨</li>
              <li>Framer Motion 🎭</li>
              <li>Rick and Morty API 🧪</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg md:col-span-2"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">🌟 Caratteristiche principali</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Ricerca avanzata, filtri per specie e stato, design responsive, modalità dark/light, e molto altro! Esplora l'app per scoprire tutte le funzionalità nascoste. Wubba lubba dub dub! 🎉
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;