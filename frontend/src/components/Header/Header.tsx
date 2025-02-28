import { Link } from "@tanstack/react-router";

import { Button } from "../ui/button";
import { HeaderLink } from "./components/HeaderLink";

export const Header = () => {
  return (
    <header className="container mx-auto p-4">
      <nav className="flex justify-between items-center">
        <HeaderLink href="/" type="blue" label="FlashLearn" />
        <div className="space-x-4">
          {/* create array and map over it */}
          <HeaderLink href="/features" type="black" label="Features" />
          <HeaderLink href="/profile" type="black" label="Profile" />
          <Button asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};
