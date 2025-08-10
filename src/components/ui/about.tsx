"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="w-full rounded-4xl py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900/30">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2680&auto=format&fit=crop"
              alt="Photographer Portrait"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">ABOUT ME</h2>
          <p className="text-lg text-muted-foreground mb-6">
            I'm a passionate photographer with over a decade of experience capturing life's most precious moments. My journey began with a simple film camera, and I've been hooked ever since. My style is a blend of timeless elegance and authentic storytelling.
          </p>
          <p className="text-muted-foreground mb-8">
            I believe that the best photos are the ones that feel real. My goal is to create a relaxed and enjoyable experience, allowing me to capture the genuine emotions and connections that make your story unique. From weddings to portraits, I'm dedicated to creating images you'll cherish for a lifetime.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-black dark:bg-primary dark:text-primary-foreground rounded-full hover:bg-gray-800 dark:hover:bg-primary/90 transition-colors"
          >
            Work With Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}