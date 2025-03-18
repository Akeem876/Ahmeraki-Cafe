import React from "react";
import Hero from "../components/hero";
import Gallery from "../components/gallery";
import Luxury from "../components/luxury";
import CTA from "../components/cta";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 px-4 md:px-8 flex flex-col items-center overflow-hidden">
        <Hero />
      </section>
      
      {/* Gallery Grid - Responsive */}
      <section className="w-full overflow-hidden py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <Gallery />
      </section>
      
      {/* Luxury and Community Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50 text-center">
        <Luxury />
      </section>
      
      {/* CTA Section */}
      <section
        className="relative py-16 md:py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Two-customers-breakfast.jpg')",
        }}
      >
        <CTA />
      </section>
    </>
  );
};

export default HomePage;