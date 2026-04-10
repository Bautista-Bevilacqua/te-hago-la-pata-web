"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/bg-hero-hd.jpeg"
        alt="Pata de cerdo asada al estilo artesanal"
        fill
        priority
        className="object-cover object-center"
      />

    
      <div className="absolute inset-0 bg-brand-black/50 z-10" />

      <div className="container mx-auto px-6 z-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.1 }} 
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-8xl text-brand-white mb-6 drop-shadow-lg"
        >
          Te Hago La Pata
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} 
          viewport={{ once: false, amount: 0.1 }} 
          transition={{ delay: 0.8, duration: 1 }}
          className="text-brand-white text-lg md:text-2xl font-light tracking-widest uppercase mb-12 drop-shadow-md"
        >
          Catering Artesanal & Experiencias Gourmet
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: false, amount: 0.1 }} 
          transition={{ delay: 1.2 }}
        >
          <a
            href="#contacto"
           
            className="inline-block border px-10 py-4 bg-brand-brown text-brand-white hover:bg-brand-brown-dark transition-all duration-300 font-medium tracking-wide shadow-xl"
          >
            RESERVAR EVENTO
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-white/70 text-sm tracking-widest z-20"
      >
        SCROLL
      </motion.div>
    </section>
  );
}
