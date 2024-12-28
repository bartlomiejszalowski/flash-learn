import { Footer } from "@/components/Footer/Footer";

import { Cta } from "./sections/Cta/Cta";
import { Feature } from "./sections/Feature/Feature";
import { Hero } from "./sections/Hero/Hero";
import { Testimonial } from "./sections/Testimonial/Testimonial";

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
