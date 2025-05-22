"use client"

import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";
import { CarouselDemo } from "@/components/ui/carousel-demo";
import { RecentWorks } from "@/components/ui/recent-works";
import { LogosSlider } from "@/components/ui/clients-demo";
import { Footer } from "@/components/ui/footer-section";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <main className="min-h-screen bg-white dark:bg-black text-black dark:text-gray-100">{children}</main>;
  }

  return (
    <main className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-gray-100' : 'bg-white text-black'}`}>
      {children}
    </main>
  );
}

export default function Home() {
  return (
    <ThemeWrapper>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Hero />
          <CarouselDemo />
          <RecentWorks />
          <section className="w-full py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">OUR CLIENTS</h2>
              <LogosSlider />
            </div>
          </section>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeWrapper>
  );
}
