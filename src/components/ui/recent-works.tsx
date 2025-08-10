"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { Loader2 } from "lucide-react"; // Using lucide for a simple loading spinner

const allWorks = [
  {
    id: 1,
    title: "Mountain Landscape",
    description: "Serene mountain view at sunset",
    image: "/Recents/1.png",
    category: "Nature"
  },
  {
    id: 2,
    title: "Urban Architecture",
    description: "Modern cityscape photography",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    category: "Urban"
  },
  {
    id: 3,
    title: "Nature's Beauty",
    description: "Lush green forest path",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    category: "Nature"
  },
  {
    id: 4,
    title: "Coastal Scene",
    description: "Dramatic ocean waves",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    category: "Nature"
  },
  {
    id: 5,
    title: "Abstract Art",
    description: "Colorful geometric patterns",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    category: "Abstract"
  },
  {
    id: 6,
    title: "City Lights",
    description: "Urban night photography",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    category: "Urban"
  },
  // Add more items to simulate a larger portfolio for infinite scroll
  {
    id: 7,
    title: "Forest Canopy",
    description: "Looking up through the tall trees",
    image: "https://images.unsplash.com/photo-1426604966848-d74f40445224",
    category: "Nature"
  },
  {
    id: 8,
    title: "Skyscraper Details",
    description: "A unique angle of modern buildings",
    image: "https://images.unsplash.com/photo-1522228115018-d838bcce5c3a",
    category: "Urban"
  }
];

interface RecentWorksProps {
  selectedCategory: string | null;
}

const ITEMS_PER_PAGE = 6; // How many items to load at a time

export function RecentWorks({ selectedCategory }: RecentWorksProps) {
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredWorks = useMemo(() => {
    // Reset visible items count when category changes
    setVisibleItems(ITEMS_PER_PAGE);
    if (!selectedCategory) {
      return allWorks;
    }
    return allWorks.filter(work => work.category === selectedCategory);
  }, [selectedCategory]);

  const worksToShow = useMemo(() => {
    return filteredWorks.slice(0, visibleItems);
  }, [filteredWorks, visibleItems]);

  const hasMore = visibleItems < filteredWorks.length;

  const loadMoreWorks = useCallback(() => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    // Simulate a network request
    setTimeout(() => {
      setVisibleItems(prev => prev + ITEMS_PER_PAGE);
      setIsLoading(false);
    }, 500);
  }, [isLoading, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container && window.innerHeight + window.scrollY >= container.offsetTop + container.offsetHeight - 300) {
        loadMoreWorks();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreWorks]);

  return (
    <section id="recent-works" className="w-full py-20 px-4 md:px-8" ref={containerRef}>
      <div className="w-full mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">RECENT WORKS</h2>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {worksToShow.map((work, index) => (
            <motion.div
              key={`${selectedCategory}-${work.id}`} // Use a key that changes with the filter
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index % ITEMS_PER_PAGE * 0.1, // Stagger animation for new items
                ease: "easeOut"
              }}
              className="relative group break-inside-avoid"
            >
              <div className="relative w-full h-auto overflow-hidden rounded-lg border-4 border-black dark:border-foreground bg-background">
                {!imageError[work.id] ? (
                  <div className="relative w-full h-auto aspect-[3/4]">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={() => setImageError(prev => ({ ...prev, [work.id]: true }))}
                      priority={index < 3}
                      quality={80}
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-[3/4] bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">Image not found</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-semibold">{work.title}</h3>
                    <p className="text-sm mt-1">{work.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {isLoading && (
          <div className="flex justify-center items-center mt-8">
            <Loader2 className="h-8 w-8 animate-spin text-black dark:text-white" />
          </div>
        )}
      </div>
    </section>
  );
}