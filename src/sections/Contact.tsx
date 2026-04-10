"use client";

import { motion } from "framer-motion";

export default function Contact() {
  // En un caso real, acá usaríamos estados (useState) para capturar los datos
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Formulario enviado! (Acá conectaríamos con el backend)");
  };

  return (
    <section id="contacto" className="py-24 bg-brand-white text-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 bg-white rounded-[var(--radius-xl)] shadow-xl overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/5 bg-brand-black text-brand-white p-12 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-brown/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-4xl font-serif mb-4">Hablemos</h2>
              <p className="text-brand-white/70 font-light mb-10">
                Contanos sobre tu evento. Te armamos un presupuesto a medida sin
                compromiso.
              </p>

              <div className="space-y-6 font-light">
                <div className="flex items-center gap-4">
                  <span className="text-brand-brown">📍</span>
                  <p>San Martin, Buenos Aires</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-brand-brown">📞</span>
                  <p>+54 9 11 1234-5678</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-brand-brown">✉️</span>
                  <p>eventos@tehagolapata.com</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-8 border-t border-brand-white/10">
              <p className="text-sm text-brand-white/50">
                Reserva con al menos 72hs de anticipación.
              </p>
            </div>
          </motion.div>

          {/* Columna Derecha: El Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:w-3/5 p-12"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Input Nombre */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-brand-black/70"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-brown/50 focus:border-brand-brown transition-colors"
                  />
                </div>
                {/* Input Teléfono */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-brand-black/70"
                  >
                    Teléfono (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Ej. 11 2345 6789"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-brown/50 focus:border-brand-brown transition-colors"
                  />
                </div>
              </div>

              {/* Input Tipo de Evento */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="event"
                  className="text-sm font-medium text-brand-black/70"
                >
                  Tipo de Evento & Cantidad de Personas
                </label>
                <input
                  type="text"
                  id="event"
                  placeholder="Ej. Cumpleaños de 50 - 40 personas"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-brown/50 focus:border-brand-brown transition-colors"
                />
              </div>

              {/* Input Mensaje */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-brand-black/70"
                >
                  Detalles adicionales
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Contanos un poco más sobre lo que tenés en mente..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-brown/50 focus:border-brand-brown transition-colors resize-none"
                ></textarea>
              </div>

              {/* Botón Enviar */}
              <button
                type="submit"
                className="mt-4 px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-brown transition-colors duration-300 rounded-lg shadow-md"
              >
                Solicitar Presupuesto
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
