import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";
import { Footer } from "@/components/ui/footer-section";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import dynamic from 'next/dynamic';

// Lazy load components that are not in the initial viewport
const CarouselDemo = dynamic(() => import('@/components/ui/carousel-demo').then(mod => mod.CarouselDemo));
const RecentWorks = dynamic(() => import('@/components/ui/recent-works').then(mod => mod.RecentWorks));
const LogosSlider = dynamic(() => import('@/components/ui/clients-demo').then(mod => mod.LogosSlider));

export default function Home() {
  return (
    <main className="min-h-screen">
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
    </main>
  );
}