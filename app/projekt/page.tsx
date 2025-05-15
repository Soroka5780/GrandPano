'use client';

import React from 'react';
import Image from 'next/image';

const OProjekte = () => {
  return (
    <main className="flex flex-col items-center bg-white">
      <div className="relative w-full h-[60vh]">
        <Image
          src="/image1.jpg"
          alt="Projekt Rohan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center z-10">
          <h1 className="text-white text-9xl md:text-[7rem] font-bold text-center">O projekte</h1>
        </div>
      </div>

      <section className="max-w-4xl px-6 py-12 text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Moderné bývanie v srdci mesta</h2>
        <p className="mb-6">
          Projekt Emily prináša unikátne bývanie spájajúce modernú architektúru s prírodou a mestským životom.
          Nachádza sa v atraktívnej lokalite pri rieke, v pešej dostupnosti od centra.
        </p>

        <h3 className="text-xl font-semibold mb-2">Kľúčové výhody</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Výborná dostupnosť a občianska vybavenosť</li>
          <li>Nadčasová architektúra a kvalitné materiály</li>
          <li>Parky, cyklotrasy a rieka v tesnej blízkosti</li>
        </ul>
      </section>

      
 <section className="w-full bg-white py-12">
  <div className="max-w-7xl mx-auto px-6 text-gray-800 flex flex-col space-y-8">
    
    <div className="flex flex-col md:flex-row md:space-x-12">
     
      <div className="md:w-2/3">
        <h2 className="text-4xl font-bold mb-4">Čo všetko nájdete v EMILY REZIDENCIA?</h2>
      </div>

      
      <div className="md:w-1/3">
        <p className="text-lg">
          Našou myšlienkou bolo navrhnúť a vytvoriť komplexnú štvrť, v ktorej jej obyvatelia nájdu všetko, 
          čo potrebujú k spokojnému a naplnenému životu. Zázemie tu nájdu biznismeni, rodiny s deťmi aj aktívni jednotlivci.
        </p>
      </div>
    </div>

    
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <Image
        src="/image9.jpg" 
        alt="Ilustračný obrázok"
        fill
        className="object-cover"
        priority
      />
    </div>
  </div>
</section>

      <div className="w-full flex justify-center py-8">
        <div className="w-full max-w-2xl h-[300px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="Mapa projektu"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10796.760231633014!2d21.258089!3d48.716385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee05d84300c41%3A0x21a6db5f1d6792a4!2sHlavn%C3%A1%20ulica%2C%20Ko%C5%A1ice!5e0!3m2!1ssk!2ssk!4v1715694200000!5m2!1ssk!2ssk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </main>
  );
};

export default OProjekte;
