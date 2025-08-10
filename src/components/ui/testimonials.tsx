"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    quote: "The photos are absolutely breathtaking! You captured our day so perfectly. We couldn't be happier with the results and the wonderful experience."
  },
  {
    name: "Michael B.",
    quote: "An amazing photographer and a true professional. The entire process was seamless, and the final images exceeded all our expectations."
  },
  {
    name: "Emily & Tom",
    quote: "We are so in love with our wedding photos. You have a true talent for capturing emotion. Thank you for giving us these beautiful memories to cherish forever."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 px-4 md:px-8">
      <div className="w-full mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">WHAT CLIENTS SAY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-lg border border-border text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" />)}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-bold">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}