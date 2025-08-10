"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer-section";

const packages = [
  {
    name: "Essential",
    price: "$450",
    features: [
      "1-Hour Session",
      "1 Location",
      "20 High-Resolution Edited Photos",
      "Online Gallery"
    ],
    cta: "Book Now"
  },
  {
    name: "Premium",
    price: "$800",
    features: [
      "2-Hour Session",
      "Up to 2 Locations",
      "50 High-Resolution Edited Photos",
      "Online Gallery & Print Release",
      "Style Consultation"
    ],
    cta: "Book Now",
    featured: true
  },
  {
    name: "Full Day",
    price: "$1,500+",
    features: [
      "Up to 6 Hours of Coverage",
      "Multiple Locations",
      "200+ High-Resolution Edited Photos",
      "Premium Online Gallery & Album Credit",
      "Second Photographer Option"
    ],
    cta: "Contact for Details"
  }
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Pricing & Packages</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Choose a package that's right for you. Custom packages are also available.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-card dark:bg-gray-900/50 p-8 rounded-lg shadow-lg border ${pkg.featured ? 'border-primary' : 'border-border'}`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">{pkg.name}</h2>
                <p className="text-4xl font-bold mb-6 text-black dark:text-white">{pkg.price}</p>
                <ul className="space-y-4 text-left mb-8">
                  {pkg.features.map(feature => (
                    <li key={feature} className="flex items-center text-muted-foreground">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <span className="w-full inline-block mt-auto text-sm text-white bg-black dark:bg-primary dark:text-primary-foreground rounded-full transition-colors px-6 py-3 font-semibold hover:bg-gray-800 dark:hover:bg-primary/90">
                    {pkg.cta}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}