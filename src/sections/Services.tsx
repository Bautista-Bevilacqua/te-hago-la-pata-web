"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const servicesData = [
  {
    id: 1,
    title: "Catering Completo",
    description:
      "Pernil de cerdo horneado a fuego lento durante 8 horas, deshuesado y listo para filetear. Incluye figacitas de manteca y 4 salsas artesanales.",
    image: "/images/completo.jpg",
  },
  {
    id: 2,
    title: "Catering Basico",
    description:
      "Selección premium de quesos de campo, salames quinteros, jamón crudo estacionado y aceitunas. Ideal para la recepción de tu evento.",
    image: "/images/basico.jpg",
  },
  {
    id: 3,
    title: "Pernil Tradicional",
    description:
      "Pernil de cerdo horneado a fuego lento durante 8 horas, deshuesado y listo para filetear. Incluye figacitas de manteca y 4 salsas artesanales.",
    image: "/images/pernil.jpg",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-brand-white" id="servicios">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-black mb-4">
            Nuestra Propuesta
          </h2>
          <div className="h-1 w-24 bg-brand-brown mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-(--radius-xl) shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full bg-brand-black/5">
                <div className="absolute inset-0 flex items-center justify-center text-brand-brown-light font-serif">
                  [Foto de {service.title}]
                </div>

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-8">
                <h3 className="text-2xl font-serif text-brand-black mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-black/70 leading-relaxed font-light mb-6">
                  {service.description}
                </p>
                <button className="text-brand-brown font-medium uppercase tracking-wide text-sm hover:text-brand-brown-dark transition-colors">
                  Ver Detalles &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
