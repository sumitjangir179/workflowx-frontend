import React from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Testimonials from '@/components/landing/Testimonials';
import Footer from '@/components/landing/Footer';


function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;