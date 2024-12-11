import React from 'react';
import { motion } from 'framer-motion';

import image2 from './images/image2.jpeg';

export default function AboutUs() {
  return (
    <div id="aboutus" className="relative w-screen flex flex-col items-start justify-start px-4 py-2 md:px-16 md:flex-row mt-8 md:mt-16">
      {/* Kontener z tłem */}
    

      <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-center md:text-left z-10">
        <h2 className="text-2xl md:text-3xl font-bold uppercase md:text-left w-full">O nas</h2>
        <p className="mt-4 md:mt-10 text-sm md:text-lg xxl:text-2xl font-medium leading-6 md:leading-7 md:mr-8">
          Specjalizujemy się w usługach dekarskich i ciesielskich, zapewniając najwyższą jakość wykonania na każdym etapie realizacji. Nasza firma słynie z precyzji, solidności i dbałości o detale, co przekłada się na trwałe i estetyczne dachy. Dysponujemy nowoczesnym zapleczem technicznym, które pozwala nam sprostać zarówno standardowym, jak i najbardziej wymagającym projektom. Zaufanie klientów budujemy dzięki terminowości, fachowemu doradztwu oraz indywidualnemu podejściu do każdej realizacji. Jesteśmy dumni z naszej pracy, która spełnia najwyższe standardy jakości i zadowolenia.
        </p>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="mt-6 md:mt-0 w-full md:w-1/2 flex justify-center items-center z-10"
      >
        <img
          src={image2}
          className="w-full h-auto rounded-lg shadow-lg object-cover md:h-full"
          alt="Nasze realizacje"
        />
      </motion.div>
    </div>
  );
}
