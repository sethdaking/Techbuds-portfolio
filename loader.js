'use client';
 
export default function myImageLoader({ src, width, quality }) {
    if(src.startsWith('https://i.ibb.co')) return src
  return `https://techbuds-portfolio.vercel.app//${src}?w=${width}&q=${quality || 75}`
}
