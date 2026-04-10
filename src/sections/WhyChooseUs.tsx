"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    id: "01",
    title: "100% Casero y Artesanal",
    description:
      "Cero conservantes o productos industriales. Adobamos y horneamos cada pernil a fuego lento, respetando los tiempos de la verdadera cocina de campo.",
  },
  {
    id: "02",
    title: "Puntualidad Intachable",
    description:
      "Sabemos que en tu evento el tiempo es oro. La comida llega a la temperatura perfecta y exactamente a la hora que la pediste. Sin excusas.",
  },
  {
    id: "03",
    title: "Nos Adaptamos a Vos",
    description:
      "Desde un cumpleaños íntimo hasta un evento corporativo de 100 personas. Te asesoramos con las cantidades exactas para que todos coman increíble y no gastes de más.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-black text-brand-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }} 
            transition={{ duration: 0.6 }}
            className="md:w-1/3"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              ¿Por qué somos tu mejor opción?
            </h2>
            <div className="h-1 w-20 bg-brand-brown mb-6" />
            <p className="text-brand-white/70 font-light text-lg leading-relaxed">
              Llevamos años perfeccionando nuestra receta para que cada evento
              sea un éxito rotundo. No solo vendemos comida, entregamos
              tranquilidad.
            </p>
          </motion.div>

          <div className="md:w-2/3 flex flex-col gap-10">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex gap-6 items-start"
              >
                <span className="text-5xl md:text-6xl font-serif text-brand-brown/40 font-bold shrink-0">
                  {reason.id}
                </span>

                <div>
                  <h3 className="text-2xl font-serif mb-2 text-brand-brown-light">
                    {reason.title}
                  </h3>
                  <p className="text-brand-white/70 font-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
