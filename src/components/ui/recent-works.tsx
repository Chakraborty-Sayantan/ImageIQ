"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";


const works = [
  {
    id: 1,
    title: "Mountain Landscape",
    description: "Serene mountain view at sunset",
    image: "Recents/1.png",
    height: "h-72"
  },
  {
    id: 2,
    title: "Urban Architecture",
    description: "Modern cityscape photography",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    height: "h-80"
  },
  {
    id: 3,
    title: "Nature's Beauty",
    description: "Lush green forest path",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    height: "h-72"
  },
  {
    id: 4,
    title: "Coastal Scene",
    description: "Dramatic ocean waves",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    height: "h-96"
  },
  {
    id: 5,
    title: "Abstract Art",
    description: "Colorful geometric patterns",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    height: "h-64"
  },
  {
    id: 6,
    title: "City Lights",
    description: "Urban night photography",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    height: "h-80"
  },
];

export function RecentWorks() {
  const [imageError, setImageError] = useState<{[key: number]: boolean}>({});

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">RECENT WORKS</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative ${work.height} group`}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg border-4 border-foreground bg-background">
                {!imageError[work.id] ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={() => {
                        console.error(`Error loading image: ${work.image}`);
                        setImageError(prev => ({ ...prev, [work.id]: true }));
                      }}
                      priority={work.id === 1}
                      quality={100}
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
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
      </div>
    </section>
  );
} 