'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslations } from '../sanity/lib/useTranslations';
import 'swiper/css';
import Image from 'next/image';

const slideImages = [
  '/slide6.jpg',
  '/slide7.jpg',
  '/image4.jpg'
];

const SwiperComponent = () => {
  const router = useRouter();
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-4/5 max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-semibold text-center mb-8 text-black">
          {translations.heading || 'Vysoká úroveň je pre nás prvoradá'}
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          spaceBetween={50}
          slidesPerView={1}
        >
          {slideImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[700px] rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white p-5 text-3xl font-semibold leading-snug">
                  {translations.slides?.[index].text || ''}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
