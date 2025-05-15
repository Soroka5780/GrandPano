import React from 'react';
import Image from 'next/image';

type InfoCardProps = {
  number: number;
  label: string;
};

const InfoCard: React.FC<InfoCardProps> = ({ number, label }) => {
  return (
    <div className="relative bg-grey-300 rounded-xl p-6 w-full max-w-xs shadow-md flex items-center gap-4">
  
      <div className="absolute top-4 right-4 w-8 h-8">
        <Image src="/logo1.svg" alt="Logo" fill style={{ objectFit: 'contain' }} />
      </div>

      
      <div className="text-5xl font-bold text-black-200">{number}</div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
};

export default InfoCard;
