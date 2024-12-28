import { features } from "@/constants/features";
import { FeatureType } from "@/types/general";

import { LandingCard } from "../../components/LandingCard";

export const Feature = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose FlashLearn?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature: FeatureType, index: number) => (
            <LandingCard key={index} type="feature" prop={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
