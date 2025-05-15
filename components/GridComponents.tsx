'use client';

import Image from 'next/image';
import React from 'react';
import InfoCard from './InfoCard';
import { motion } from 'framer-motion';

const GridComponent = () => {
  return (
    <div className="space-y-16">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl">
        
        
        <div className="relative w-full md:w-1/2 h-[600px] rounded-lg overflow-hidden">
          <Image
            src="/image13.jpg"
            alt="Vizuál projektu"
            fill
            style={{ objectFit: 'cover' }}
            className="z-0"
          />
        </div>

        
        <motion.div
          className="w-full md:w-1/2 relative z-10"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-bold mb-4">Spoznajte rezidenciu Emily</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Len 7 minút pešo a ste priamo v srdci Košíc. Predstavte si tú slobodu a nepreberné možnosti! Či už ide
            o každodenné povinnosti alebo voľnočasové radosti, mesto máte na dosah z prvého radu.
          </p>

         
          <div className="flex flex-wrap gap-4 z-20">
            <InfoCard number={20} label="nových bytov" />
            <InfoCard number={3} label="Parky v blízkosti" />
            <InfoCard number={10} label="minút do centra" />
            <InfoCard number={9} label="úrovní dizajnu" />
            <InfoCard number={5} label="Minút autom do centra" />
            <InfoCard number={10} label="Minút pešo do centra" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GridComponent;
