"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer-section";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    // This is a placeholder for form submission logic.
    // In a real app, you would send this data to a serverless function,
    // an email service like Resend, or a form handler like Formspree.
    setTimeout(() => {
      setStatus("Your message has been sent successfully!");
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-bold text-center mb-4">Get In Touch</h1>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Ready to create something beautiful? Fill out the form below to get started.
            </p>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" required className="w-full p-3 bg-gray-100 dark:bg-gray-900/50 rounded-md border border-border focus:ring-2 focus:ring-primary outline-none" />
              <input type="email" placeholder="Your Email" required className="w-full p-3 bg-gray-100 dark:bg-gray-900/50 rounded-md border border-border focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div>
              <select required className="w-full p-3 bg-gray-100 dark:bg-gray-900/50 rounded-md border border-border focus:ring-2 focus:ring-primary outline-none appearance-none">
                <option value="">Select Service Type...</option>
                <option value="portrait">Portrait Session</option>
                <option value="wedding">Wedding Photography</option>
                <option value="event">Event Coverage</option>
                <option value="branding">Branding & Commercial</option>
              </select>
            </div>
            <div>
              <textarea placeholder="Tell me about your project..." required rows={5} className="w-full p-3 bg-gray-100 dark:bg-gray-900/50 rounded-md border border-border focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div className="text-center">
              <Button type="submit" size="lg" className="px-10 py-6 text-base">
                Send Inquiry
              </Button>
            </div>
            {status && <p className="text-center mt-4">{status}</p>}
          </motion.form>
        </div>
      </main>
      <Footer />
    </div>
  );
}