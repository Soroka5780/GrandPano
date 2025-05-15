'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { fetchApartmentById } from '../../../sanity/lib/fetchApartments';
import { urlFor, urlForFile } from '../../../sanity/lib/image'; 
import type { SanityImage, SanityFile } from '../../../types/sanity';
import Image from 'next/image';


interface Apartment {
  id: string;
  title: string;
  rooms: number;
  area: number;
  price: number;
  status: string;
  floor: number;
  orientation: string;
  planImage?: SanityImage;
  pdfFile?: SanityFile;
}

const ApartmentDetailPage = () => {
   const router = useRouter();
  const params = useParams();
  const idParam = params?.id;
  const id = Array.isArray(idParam) ? idParam[0] : idParam;

  const [apartment, setApartment] = useState<Apartment | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const apartmentData = await fetchApartmentById(id);
        if (apartmentData) {
          setApartment(apartmentData);
        }
        setLoading(false);
      };
      fetchData();
    }
  }, [id]);

  if (loading) return <div className="text-center py-20 text-gray-600">Načítavam...</div>;
  if (!apartment) return <div className="text-center py-20 text-red-600">Byt nebol nájdený.</div>;

  const planImageUrl = apartment.planImage ? urlFor(apartment.planImage).url() : null;
  const pdfFileUrl = apartment.pdfFile ? urlForFile(apartment.pdfFile) : null;


 
  return (
    <div className="min-h-screen bg-white pt-40 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 text-center mb-10">
          {apartment.title}
        </h1>

        <div className="bg-gray-100 rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {planImageUrl && (
              <div>
                <Image
                  src={planImageUrl}
                  alt="Pôdorys bytu"
                  width={600}
                  height={400}
                  className="rounded shadow w-full h-auto object-contain"
                />
              </div>
            )}

         <div className="bg-white p-6 rounded-lg shadow border text-sm text-gray-800 space-y-4">
  <div className="flex justify-between border-b pb-1">
    <span className="font-medium">Budova</span>
    <span>A</span>
  </div>
  <div className="flex justify-between border-b pb-1">
    <span className="font-medium">Číslo podlažia</span>
    <span>{apartment.floor} NP</span>
  </div>
  <div className="flex justify-between border-b pb-1">
    <span className="font-medium">Interiér</span>
    <span>{apartment.area.toFixed(2)} m²</span>
  </div>
  <div className="flex justify-between font-semibold text-base bg-gray-100 p-2 rounded">
    <span>Celková výmera</span>
    <span>{apartment.area.toFixed(2)}m²</span> 
  </div>

  <div className="pt-4 border-t">
    <p className="text-lg font-bold">Cena:</p>
    <p className="text-2xl font-extrabold text-gray-900">{apartment.price.toLocaleString()} €</p>
    <p className="text-xs text-gray-500">cena je s DPH</p>
  </div>

  <p className="text-xs text-gray-600">
    Ku každému bytu je potrebné dokúpiť pivničnú kobku a parkovacie státie. K 4-izbovým bytom prislúchajú dve parkovacie státia.
  </p>

    <button
      className="w-full bg-orange-600 hover:bg-orange-900 text-white font-semibold py-3 rounded-lg"
      onClick={() => router.push('/contact')}
    >
      Mám záujem
    </button>

  <div className="flex justify-between gap-4 mt-2">
  <button
    onClick={() => window.open(pdfFileUrl!, '_blank')}
    className="flex-1 border border-gray-800 text-gray-900 py-2 rounded-lg font-medium hover:bg-gray-100"
  >
    Stiahnuť PDF
  </button>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetailPage;