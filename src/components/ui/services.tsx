"use client";

import { motion } from "framer-motion";
import { Camera, PenTool, Code, Star } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Logo Design & Branding",
    description: "We craft unique and memorable brand identities that tell your story. From the logo to the color palette, we ensure every element is cohesive and impactful.",
    process: ["Discovery & Research", "Concept Sketching", "Digital Design", "Revisions & Finalization"]
  },
  {
    icon: Camera,
    title: "Photo Editing & Retouching",
    description: "Our expert retouching services enhance your photos while maintaining a natural look. We specialize in color correction, blemish removal, and creative enhancements.",
    process: ["Initial Assessment", "Color & Tone Correction", "Detailed Retouching", "Final Review"]
  },
  {
    icon: Code,
    title: "Web Design",
    description: "We design and build beautiful, responsive websites that provide a seamless user experience. Our focus is on clean design and intuitive navigation.",
    process: ["Wireframing & Prototyping", "UI/UX Design", "Development", "Launch & Testing"]
  },
  {
    icon: Star,
    title: "Custom Graphics",
    description: "From social media assets to marketing materials, we create custom graphics that capture attention and communicate your message effectively.",
    process: ["Briefing & Ideation", "Draft Creation", "Feedback & Iteration", "Final Delivery"]
  }
];

export function Services() {
  return (
    <section id="services" className="w-full py-20 px-4 md:px-8">
      <div className="w-full mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">OUR SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-lg border border-border flex flex-col"
            >
              <div className="flex-shrink-0">
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
              </div>
              <div className="mt-auto">
                <h4 className="font-semibold mb-2">Our Process:</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  {service.process.map(step => <li key={step}>{step}</li>)}
                </ul>
                <button className="mt-6 w-full text-sm text-primary-foreground bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 rounded-full transition-colors px-4 py-2">
                  Request a Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}