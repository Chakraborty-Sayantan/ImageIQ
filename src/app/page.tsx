"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";
import { About } from "@/components/ui/about";
import { Services } from "@/components/ui/services";
import { RecentWorks } from "@/components/ui/recent-works";
import { Testimonials } from "@/components/ui/testimonials";
import { CarouselDemo } from "@/components/ui/carousel-demo";
import { LogosSlider } from "@/components/ui/clients-demo";
import { Footer } from "@/components/ui/footer-section";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    const recentWorksSection = document.getElementById('recent-works');
    if (recentWorksSection) {
      recentWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 max-w-6xl mx-auto w-full">
          <Hero />
          <About />
          <Services />
          <CarouselDemo onCategorySelect={handleCategorySelect} />
          <RecentWorks selectedCategory={selectedCategory} />
          <Testimonials />
          <section className="w-full py-20 px-4 md:px-8">
            <div className="w-full">
              <h2 className="text-4xl font-bold text-center mb-12">TRUSTED BY</h2>
              <LogosSlider />
            </div>
          </section>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </main>
  );
}