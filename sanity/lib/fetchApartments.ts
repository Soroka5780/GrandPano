// lib/fetchApartments.ts
import { client } from './sanityClient';

export const fetchApartmentById = async (id: string) => {
  const query = `*[_type == "apartment" && id == $id][0]`; // Pridáme podmienku pre konkrétny ID
  try {
    const apartment = await client.fetch(query, { id }); // Posielame ID ako parameter
    return apartment;
  } catch (error) {
    console.error("Chyba pri načítaní bytu: ", error);
    return null; // Ak sa byt nenájde, vráti sa null
  }
};

export const fetchApartments = async () => {
  const query = '*[_type == "apartment"]'; // Získanie všetkých bytov
  try {
    const apartments = await client.fetch(query); // Načítame všetky byty
    return apartments; // Vrátime všetky byty
  } catch (error) {
    console.error("Chyba pri načítaní bytov: ", error);
    return []; // Ak sa nepodarí načítať, vráti prázdne pole
  }
};
