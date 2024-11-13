import React from 'react';
import Hero from '../components/home/Hero';
import ClientShowcase from '../components/home/ClientShowcase';
import VideoTestimonials from '../components/home/VideoTestimonials';
import TeamSection from '../components/home/TeamSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientShowcase />
      <VideoTestimonials />
      <TeamSection />
    </main>
  );
}