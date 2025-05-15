import React from "react";
import Image from 'next/image';

const images = [
  { src: "/image1.jpg", text: "Elegantný priestor pre rodinu" },
  { src: "/image2.jpg", text: "Prírodné svetlo v každej izbe" },
  { src: "/image3.jpg", text: "Moderné a funkčné interiéry" },
  { src: "/image4.jpg", text: "Tichá lokalita blízko centra" },
  { src: "/image5.jpg", text: "Vysoký štandard vybavenia" },
  { src: "/image6.jpg", text: "Komfort a štýl v jednom" },
];

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-5xl font-bold mb-8 text-black w-full break-words text-center">
        Užite si to najlepšie s<br />Rezidenciou Emily
      </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {images.map((img, index) => (
    <div key={index} className="relative overflow-hidden rounded-lg shadow-md group h-64">
      <Image
        src={img.src}
        alt={`Interiér ${index + 1}`}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 bg-black/40 text-white p-2 text-sm sm:text-base md:text-lg font-medium w-full">
        {img.text}
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default Gallery;
