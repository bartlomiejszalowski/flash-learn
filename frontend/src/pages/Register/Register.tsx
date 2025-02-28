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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Register = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Zarejestruj się
          </CardTitle>
          <CardDescription className="text-center">
            Utwórz nowe konto, aby korzystać z aplikacji
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={() => {}} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Imię</Label>
              <Input id="name" type="text" placeholder="Jan Kowalski" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Hasło</Label>
              <Input id="password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Potwierdź hasło</Label>
              <Input id="confirmPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label>Płeć</Label>
              <RadioGroup defaultValue="female">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Mężczyzna</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Kobieta</Label>
                </div>
              </RadioGroup>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <TimerIcon className="mr-2 h-4 w-4 animate-spin" />}
              Zarejestruj się
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-600 w-full">
            Masz już konto?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Zaloguj się
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
