import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const Cta = () => {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Supercharge Your Language Learning?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of learners who have accelerated their language mastery
          with FlashLearn. Start creating your custom flashcards today!
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/signup">Get Started for Free</Link>
        </Button>
      </div>
    </section>
  );
};
