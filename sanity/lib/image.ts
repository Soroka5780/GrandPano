import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { client } from './client'; // tvoje nastavenie klienta

const builder = imageUrlBuilder(client);
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export function urlFor(source: any) {
  return builder.image(source);
}

export function urlForFile(source: any) {
   if (!source?.asset?._ref) return null;
  const fileId = source.asset._ref.replace('file-', '').replace('-','.');
  return `https://cdn.sanity.io/files/${projectId}/production/${fileId}`;
}