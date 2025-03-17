import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { TimerIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RegisterForm } from "@/form/forms";
import { registerSchema } from "@/form/schema";
import { useRegister } from "@/hooks/useQueryActions";

export type RegisterCredentials = {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
};

export const Register = () => {
  const { handleRegister, isPending } = useRegister();

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nickname: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: undefined, // or 'female', depending on your default choice
    },
  });

  const handleFormSubmit = form.handleSubmit((data: RegisterCredentials) => {
    if (!data) return;
    handleRegister(data);
    console.log("request sent");
  });

  //TODO  SEPARATE EACH INPUT
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
          <Form {...form}>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nickname</Label>
                <Input
                  id="nickname"
                  type="text"
                  placeholder="Jan Kowalski"
                  {...form.register("nickname")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...form.register("email")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Hasło</Label>
                <Input
                  id="password"
                  type="password"
                  {...form.register("password")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Potwierdź hasło</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...form.register("confirmPassword")}
                />
              </div>
              <div className="space-y-2">
                <Label>Płeć</Label>
                <Controller
                  name="gender" // This is the name used in the schema
                  control={form.control}
                  render={({ field }) => (
                    <RadioGroup value={field.value} onChange={field.onChange}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Mężczyzna</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Kobieta</Label>
                      </div>
                    </RadioGroup>
                  )}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending && (
                  <TimerIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Zarejestruj się
              </Button>
            </form>
          </Form>
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
