import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Gallery from "@/sections/Gallery"; 
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import FloatingWhatsApp from "@/components/FloatingWpp";

export default function Home() {
  return (
    // EL FIX ESTÁ ACÁ: Cambiamos overflow-x-hidden por overflow-clip
    <main className="relative w-full overflow-clip">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Contact />
      <Footer />
      
      <FloatingWhatsApp />
    </main>
  );
}