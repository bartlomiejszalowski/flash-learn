import { Link } from "@tanstack/react-router";

import { Button } from "../ui/button";
import { HeaderLink } from "./components/HeaderLink";

export const Header = () => {
  return (
    <header className="container mx-auto p-4">
      <nav className="flex justify-between items-center">
        <HeaderLink href="/" type="blue" label="FlashLearn" />
        <div className="space-x-4">
          <HeaderLink href="/features" type="black" label="Features" />
          <HeaderLink href="/pircing" type="black" label="Pircing" />
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};
