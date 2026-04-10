"use client";

import { useState, useEffect } from "react";
// Sumamos AnimatePresence para poder animar elementos que desaparecen del DOM
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // Nuevo estado para controlar si el menú de celu está abierto o cerrado
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // Si el menú está abierto, forzamos el fondo negro para que se lea bien
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-brand-black/95 backdrop-blur-md shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            // Al tocar el logo, cerramos el menú por las dudas
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-2xl text-brand-white tracking-wide hover:text-brand-brown-light transition-colors relative z-50"
          >
            THLP.
          </a>

          {/* Menú de Escritorio (Oculto en Celulares) */}
          <div className="hidden md:flex gap-8 items-center text-brand-white font-light text-sm tracking-widest uppercase relative z-50">
            <a
              href="#servicios"
              className="hover:text-brand-brown transition-colors"
            >
              Servicios
            </a>
            <a
              href="#galeria"
              className="hover:text-brand-brown transition-colors"
            >
              Galería
            </a>
            <a
              href="#contacto"
              className="hover:text-brand-brown transition-colors"
            >
              Contacto
            </a>
            <a
              href="#contacto"
              className="px-5 py-2 border font-bold border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-brand-white transition-colors rounded-full"
            >
              Reservar
            </a>
          </div>

          {/* Botón Hamburguesa (Oculto en Escritorio) */}
          <button
            className="md:hidden text-brand-white relative z-50 p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Alternar menú"
          >
            {isMobileMenuOpen ? (
              // Ícono de "X" (Cerrar)
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Ícono de "Hamburguesa" (Abrir)
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </motion.nav>

      {/* Menú Desplegable para Celulares */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col gap-10 text-center text-brand-white font-light text-2xl tracking-widest uppercase">
              <a
                href="#servicios"
                onClick={() => setIsMobileMenuOpen(false)} // Cierra el menú al hacer click
                className="hover:text-brand-brown transition-colors"
              >
                Servicios
              </a>
              <a
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-brand-brown transition-colors"
              >
                Contacto
              </a>
              <a
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-10 py-4 mt-4 border-2 border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-brand-white transition-colors rounded-full font-medium"
              >
                Reservar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
