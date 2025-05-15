import React, { Suspense } from 'react';
import Hero from "@/components/Hero";
import SwiperComponent from '../components/Slider';
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import GridComponent from '../components/GridComponents'

export default function Home() {
  return (
       <>
      <Suspense fallback={<div>Načítavam...</div>}>
        <Hero />
        <SwiperComponent />    
        <Gallery />
        <GridComponent />
      </Suspense>
      <Footer />  
    </>
  );
}
