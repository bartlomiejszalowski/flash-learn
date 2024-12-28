import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Master Any Language with FlashLearn
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Revolutionize your language learning journey with our interactive
        flashcard app. Create custom collections, flip cards, and learn at your
        own pace.
      </p>
      <div className="space-x-4">
        <Button asChild size="lg">
          <Link href="/dashboard">Start Learning for Free</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/demo">Watch Demo</Link>
        </Button>
      </div>
    </section>
  );
};
