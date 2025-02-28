import { Link } from "@tanstack/react-router";
import { TimerIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Zaloguj się
          </CardTitle>
          <CardDescription className="text-center">
            Wprowadź swój email i hasło, aby się zalogować
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={() => {}} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Hasło</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <TimerIcon className="mr-2 h-4 w-4 animate-spin" />}
              Zaloguj się
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <Link
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Zapomniałeś hasła?
            </Link>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-600 w-full">
            Nie masz jeszcze konta?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Zarejestruj się
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
