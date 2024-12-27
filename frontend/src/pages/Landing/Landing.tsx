import { Footer } from "@/components/Footer/Footer";

import { Cta } from "./components/Cta";
import { Feature } from "./components/Feature/Feature";
import { Hero } from "./components/Hero";
import { Testimonial } from "./components/Testimonial";

export const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Hero />
        <Feature />
        <Testimonial />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};
