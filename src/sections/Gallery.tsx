"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image"; // <-- 1. IMPORTANTE: Agregamos la importación de Image

const galleryImages = [
  {
    id: 1,
    src: "/images/galeria-1.jpg",
    alt: "Pernil listo para servir en evento",
  },
  {
    id: 2,
    src: "/images/galeria-2.jpg",
    alt: "Mesa de fiambres y quesos premium",
  },
  {
    id: 3,
    src: "/images/galeria-3.jpg",
    alt: "Mesa dulce con tortas y postres",
  },
  {
    id: 4,
    src: "/images/galeria-4.jpg",
    alt: "Detalle de los panes artesanales y salsas",
  },
  {
    id: 5,
    src: "/images/galeria-5.jpg",
    alt: "Invitados disfrutando del catering",
  },
];

export default function Gallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateRange = () => {
      if (carouselRef.current) {
        const range = carouselRef.current.scrollWidth - window.innerWidth + 48;
        setScrollRange(range);
      }
    };

    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section
      id="galeria"
      ref={targetRef}
      className="relative h-[300vh] bg-brand-white"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6 mb-12 w-full">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-black mb-4">
            Trabajos Realizados
          </h2>
          <div className="h-1 w-24 bg-brand-brown" />
          <p className="text-brand-black/50 font-light mt-4 tracking-widest uppercase">
            Seguí bajando para explorar
          </p>
        </div>

        <motion.div
          ref={carouselRef}
          style={{ x }}
          className="flex gap-6 px-6 md:px-12 w-max"
        >
          {galleryImages.map((img) => (
            <div
              key={img.id}
              // El 'relative' acá ya estaba, es el que hace que el 'fill' de la imagen funcione sin tirar error
              className="relative w-[85vw] md:w-[45vw] lg:w-[30vw] h-[400px] md:h-[500px] rounded-[var(--radius-xl)] overflow-hidden shadow-2xl border border-gray-100 shrink-0 group"
            >
              {/* Fallback visual que aparece un microsegundo antes de que cargue la foto */}
              <div className="absolute inset-0 bg-brand-brown/10 animate-pulse z-0" />

              {/* 2. REEMPLAZO: Acá está el componente Image de Next.js */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 30vw"
                className="object-cover z-10 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
