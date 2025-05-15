"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslations } from '../sanity/lib/useTranslations';

export default function Hero() {
  const router = useRouter();  
  const fullWord = "EMILY";

  const [displayedText, setDisplayedText] = useState(fullWord);
  const [isDeleting, setIsDeleting] = useState(true);

  const searchParams = useSearchParams();
  const langQuery = searchParams?.get('lang');
  const [language, setLanguage] = useState(langQuery === 'en' ? 'en' : 'sk');

  const translations = useTranslations(language);

useEffect(() => {
  if (langQuery && langQuery !== language) {
    setLanguage(langQuery);

    const url = new URL(window.location.href);
    url.searchParams.set('lang', langQuery);
    router.push(url.pathname + url.search);
  }
}, [langQuery, language, router]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayedText((prev) => {
        if (isDeleting) {
          if (prev.length > 0) return prev.slice(0, -1);
          else {
            setIsDeleting(false);
            return "";
          }
        } else {
          if (prev.length < fullWord.length) return fullWord.slice(0, prev.length + 1);
          else {
            setIsDeleting(true);
            return fullWord;
          }
        }
      });
    }, 350);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-wide">
          {translations.baseText ?? 'Rezidencia'}
          <span className="text-orange-400">{displayedText}</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          { translations.description ?? 'Moderné bývanie v prestížnej lokalite.'}
        </p>
        <button
          className="bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-1000 px-8 py-3 rounded-lg text-base font-semibold"
          onClick={() => {
            router.push('/projekt');
          }}
        >
          {translations.project ?? 'O projekte'}
        </button>
      </div>
    </section>
  );
}
