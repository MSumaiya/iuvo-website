import { createClient } from 'next-sanity';
import dotenv from 'dotenv';
dotenv.config();
//const token = process.env.SANITY_API_WRITE_TOKEN;
const token=process.env.NEXT_PUBLIC_SANITY_API_WRITE_TOKEN

if (!token) {
  console.warn('❌ SANITY_API_WRITE_TOKEN is missing or undefined');
} else {
  console.log('✅ SANITY_API_WRITE_TOKEN is loaded successfully');
}

export const sanityClient = createClient({
  projectId: 'byhbrcd9',
  dataset: 'production',
  apiVersion: '2024-05-01',
  useCdn: false,
  token,
  perspective: 'published',
});

console.log('[DEBUG] process.env:', Object.keys(process.env));