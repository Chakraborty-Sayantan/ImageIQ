"use client";

import { Carousel } from "@/components/ui/carousel";

const slideData = [
  {
    title: "All Works",
    button: "View All",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: null // This will show all works
  },
  {
    title: "Urban Architecture",
    button: "Explore Urban",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Urban"
  },
  {
    title: "Nature & Landscape",
    button: "Explore Nature",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Nature"
  },
  {
    title: "Abstract Art",
    button: "Explore Abstract",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Abstract"
  },
];

interface CarouselDemoProps {
  onCategorySelect: (category: string | null) => void;
}

export function CarouselDemo({ onCategorySelect }: CarouselDemoProps) {
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <div className="w-full mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">EXPLORE CATEGORIES</h2>
        <Carousel slides={slideData} onSlideClick={(category) => onCategorySelect(category)} />
      </div>
    </div>
  );
}