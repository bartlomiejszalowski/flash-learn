import { useNavigate } from "@tanstack/react-router";

import { useGetAuthUser, useLogout } from "@/hooks/useAuthQueryActions";

import { Button } from "../ui/button";
import { HeaderLink } from "./components/HeaderLink";

export const Header = () => {
  const { authUser, isLoading } = useGetAuthUser();

  const { logoutUser } = useLogout();

  const navigate = useNavigate();

  const handleAuthButtonClick = () => {
    if (authUser) {
      logoutUser();
      navigate({ to: "/login" });
    } else {
      navigate({ to: "/login" });
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <header className="container mx-auto p-4">
      <nav className="flex justify-between items-center">
        <HeaderLink href="/" type="blue" label="FlashLearn" />
        <div className="space-x-4">
          {/* create array and map over it */}
          <HeaderLink href="/features" type="black" label="Features" />
          {authUser && (
            <HeaderLink
              href={`/profile/${authUser._id}`}
              type="black"
              label="My Profile"
            />
          )}
          <Button onClick={handleAuthButtonClick}>
            {authUser ? "Logout" : "Login"}
          </Button>
        </div>
      </nav>
    </header>
  );
};
