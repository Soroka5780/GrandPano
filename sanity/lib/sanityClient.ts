// lib/sanityClient.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'hpmgw3wy', // tvoj projekt ID z Sanity
  dataset: 'production', // Alebo tvoj dataset
  useCdn: true, // Priame načítanie z CDN, pre rýchlejšie odpovede
});