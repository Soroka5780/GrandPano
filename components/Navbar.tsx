'use client';

import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useTranslations } from '../sanity/lib/useTranslations';
import Image from 'next/image';

const languages = [
  { code: 'sk', label: 'Slovensky', flag: 'https://flagcdn.com/sk.svg' },
  { code: 'en', label: 'English', flag: 'https://flagcdn.com/gb.svg' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const langQuery = searchParams?.get('lang');
  const [language, setLanguage] = useState(langQuery === 'en' ? 'en' : 'sk');

  const translations = useTranslations(language);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const changeLanguage = (code: string) => {
    setLanguage(code);

    const url = new URL(window.location.href);
    url.searchParams.set('lang', code);
    router.push(url.pathname + url.search);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
      
        <div className="flex items-center space-x-2 justify-start">
          <Image
            src="/logo1.svg"
            alt="Logo"
            width={32}      
            height={32}
            className="w-auto"
          />
          <span className="text-xl font-semibold text-gray-900 whitespace-pre-line">{translations.baseText ?? 'REZIDENCIA'}{"\n"}EMILY</span>
        </div>

        
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 px-6 py-2 rounded-lg text-base font-semibold"
            onClick={() => router.push('/')}
          >
            {translations.home ?? 'Domov'}
          </button>
          <button
            className="bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 px-6 py-2 rounded-lg text-base font-semibold"
            onClick={() => router.push('/contact')}
          >
            {translations.contact ?? 'Kontaktujte nás'}
          </button>
          <button
            className="bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 px-6 py-2 rounded-lg text-base font-semibold"
            onClick={() => router.push('/byty')}
          >
            {translations.apartments ?? 'Zobraziť byty'}
          </button>
          <button
            className="bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-1000 px-8 py-3 rounded-lg text-base font-semibold"
            onClick={() => router.push('/projekt')}
          >
            {translations.project ?? 'O projekte'}
          </button>

          <button
            type="button"
            className="ml-6 flex items-center cursor-pointer select-none bg-transparent border-none"
            onClick={() => changeLanguage(language === 'sk' ? 'en' : 'sk')}
            aria-label={translations.languageSwitch ?? 'Prepni jazyk'}
            title={translations.languageSwitch ?? 'Prepni jazyk'}
          >
            <Image
              src={language === 'sk' ? languages[0].flag : languages[1].flag}
              alt={language === 'sk' ? 'Slovenská vlajka' : 'Britská vlajka'}
              width={24}   
              height={24}
              className="rounded-sm"
            />
            <div className="ml-2 relative w-12 h-6 bg-gray-300 rounded-full transition-colors duration-300">
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-orange-600 rounded-full shadow transform transition-transform duration-300 ${language === 'sk' ? '' : 'translate-x-6'}`}
              />
            </div>
            <span className="ml-3 font-semibold text-gray-700">{language.toUpperCase()}</span>
          </button>
        </div>

        
        <div className="md:hidden relative flex items-center space-x-4">
          
          <button
            type="button"
            className="flex items-center cursor-pointer select-none bg-transparent border-none"
            onClick={() => changeLanguage(language === 'sk' ? 'en' : 'sk')}
            aria-label={translations.languageSwitch ?? 'Prepni jazyk'}
            title={translations.languageSwitch ?? 'Prepni jazyk'}
          >
            <Image
              src={language === 'sk' ? languages[0].flag : languages[1].flag}
              alt={language === 'sk' ? 'Slovenská vlajka' : 'Britská vlajka'}
              width={24}      
              height={24}       
              className="rounded-sm"
            />
            <div className="ml-2 relative w-12 h-6 bg-gray-300 rounded-full transition-colors duration-300">
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-orange-600 rounded-full shadow transform transition-transform duration-300 ${language === 'sk' ? '' : 'translate-x-6'}`}
              />
            </div>
            <span className="ml-3 font-semibold text-gray-700">{language.toUpperCase()}</span>
          </button>

          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-orange-600 hover:text-orange-700 focus:outline-none"
            aria-label="Open Menu"
          >
            {menuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

       {menuOpen && (
  <div className="absolute left-0 mt-24 w-48 bg-white rounded-lg shadow-lg z-50">
    <button
      className="block w-full text-left px-4 py-2 text-orange-600 hover:bg-orange-100 hover:text-orange-700 font-semibold"
      onClick={() => { router.push('/'); setMenuOpen(false); }}
    >
      {translations.home ?? 'Domov'}
    </button>
    <button
      className="block w-full text-left px-4 py-2 text-orange-600 hover:bg-orange-100 hover:text-orange-700 font-semibold"
      onClick={() => { router.push('/contact'); setMenuOpen(false); }}
    >
      {translations.contact ?? 'Kontaktujte nás'}
    </button>
    <button
      className="block w-full text-left px-4 py-2 text-orange-600 hover:bg-orange-100 hover:text-orange-700 font-semibold"
      onClick={() => { router.push('/byty'); setMenuOpen(false); }}
    >
      {translations.apartments ?? 'Zobraziť byty'}
    </button>
    <button
      className="block w-full text-left px-4 py-2 text-orange-600 hover:bg-orange-100 hover:text-orange-700 font-semibold"
      onClick={() => { router.push('/projekt'); setMenuOpen(false); }}
    >
      {translations.project ?? 'O projekte'}
    </button>
  </div>
)}
        </div>
      </nav>
    </header>
  );
}
