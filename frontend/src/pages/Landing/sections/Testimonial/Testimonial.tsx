import { testimonials } from "@/constants/testimonials";

import { LandingCard } from "../../components/LandingCard";

export const Testimonial = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <LandingCard key={index} type="testimonial" prop={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
