'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchApartments } from '../../sanity/lib/fetchApartments';

interface Apartment {
  id: string;
  title: string;
  rooms: number;
  area: number;
  price: number;
  status: string;
  floor: number;
  orientation: string;
  pdfUrl: string;
  planUrl: string;
}

const ApartmentsPage = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [filteredApartments, setFilteredApartments] = useState<Apartment[]>([]);

  const [selectedRooms, setSelectedRooms] = useState<number | ''>('');
  const [selectedStatus, setSelectedStatus] = useState<string | ''>('');
  const [selectedSort, setSelectedSort] = useState<string>('price');

  useEffect(() => {
    const getApartments = async () => {
      const fetchedApartments = await fetchApartments();
      setApartments(fetchedApartments);
      setFilteredApartments(fetchedApartments);
    };
    getApartments();
  }, []);

  useEffect(() => {
    let filtered = apartments;

    if (selectedRooms) {
      filtered = filtered.filter((a) => a.rooms === selectedRooms);
    }
    if (selectedStatus) {
      filtered = filtered.filter((a) => a.status === selectedStatus);
    }

    if (selectedSort === 'price') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'price-desc') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (selectedSort === 'area') {
      filtered = [...filtered].sort((a, b) => a.area - b.area);
    } else if (selectedSort === 'area-desc') {
      filtered = [...filtered].sort((a, b) => b.area - a.area);
    }

    setFilteredApartments(filtered);
  }, [selectedRooms, selectedStatus, selectedSort, apartments]);

  const router = useRouter();

  const handleDetailClick = (id: string) => {
    router.push(`/apartments/${id}`);
  };

  const handleSort = (field: 'price' | 'area') => {
    setSelectedSort((prev) => (prev === field ? `${field}-desc` : field));
  };

  return (
    <div
      className="min-h-screen pt-52 pb-12 bg-cover bg-center font-sans text-[#103c34]"
      style={{
        backgroundImage: "url('/obrazok4.jpg')",
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-white/90 max-w-7xl mx-auto px-6 rounded-lg shadow-md">
        <h1 className="text-5xl font-bold mb-12 text-[#080808] text-center">Zoznam bytov</h1>

        <div className="flex flex-col md:flex-row md:justify-center gap-8 mb-8 text-center">
          <div>
            <p className="mb-2 font-semibold">Počet izieb:</p>
            <div className="flex gap-2 justify-center">
              {[2, 3, 4].map((num) => (
                <button
                  key={num}
                  className={`px-4 py-2 border rounded-md ${
                    selectedRooms === num
                      ? 'bg-[#e97110] text-white'
                      : 'bg-white text-[#103c34]'
                  }`}
                  onClick={() =>
                    setSelectedRooms(selectedRooms === num ? '' : num)
                  }
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 font-semibold">Dostupnosť:</p>
            <div className="flex gap-2 justify-center">
              {['available', 'reserved', 'sold'].map((status) => (
                <button
                  key={status}
                  className={`px-4 py-2 border rounded-md capitalize ${
                    selectedStatus === status
                      ? 'bg-[#e97110] text-white'
                      : 'bg-white text-[#103c34]'
                  }`}
                  onClick={() =>
                    setSelectedStatus(
                      selectedStatus === status ? '' : status
                    )
                  }
                >
                  {status === 'available'
                    ? 'Voľný'
                    : status === 'reserved'
                    ? 'Rezervovaný'
                    : 'Predaný'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse rounded-lg overflow-hidden shadow">
            <thead>
              <tr className="bg-[#f1670b] text-white text-left text-sm">
                <th className="px-4 py-3">Označenie bytu</th>
                <th className="px-4 py-3">Izby</th>
                <th
                  className="px-4 py-3 cursor-pointer select-none hover:underline"
                  onClick={() => handleSort('area')}
                >
                  Plocha m²
                  {selectedSort === 'area' && ' ↑'}
                  {selectedSort === 'area-desc' && ' ↓'}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer select-none hover:underline"
                  onClick={() => handleSort('price')}
                >
                  Cena €
                  {selectedSort === 'price' && ' ↑'}
                  {selectedSort === 'price-desc' && ' ↓'}
                </th>
                <th className="px-4 py-3">Dostupnosť</th>                
                <th className="px-4 py-3">Detail</th>
              </tr>
            </thead>
            <tbody>
              {filteredApartments.map((apartment, index) => (
                <tr
                  key={apartment.id}
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#f0ede3]'
                  } text-sm hover:bg-[#e6e2d8] transition`}
                >
                  <td className="px-4 py-3 font-medium">{apartment.title}</td>
                  <td className="px-4 py-3">{apartment.rooms}</td>
                  <td className="px-4 py-3">
                    {apartment.area.toFixed(2)}
                  </td>
                  <td className="px-4 py-3">
                    {apartment.price.toLocaleString('sk-SK')}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1">
                      {apartment.status === 'available'
                        ? 'Voľný'
                        : apartment.status === 'sold'
                        ? 'Predaný'
                        : 'Rezervovaný'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleDetailClick(apartment.id)}
                      className="text-[#103c34] hover:text-[#0d2e28] underline"
                    >
                      →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApartmentsPage;
