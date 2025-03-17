import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "@tanstack/react-router";
import { TimerIcon } from "lucide-react";
import { useForm } from "react-hook-form";

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
import { LoginForm } from "@/form/forms";
import { loginSchema } from "@/form/schema";
import { useLoginUser } from "@/hooks/useQueryActions";

export type LoginCredentials = {
  email: string;
  password: string;
};

export const Login = () => {
  const { loginUser, isPending } = useLoginUser();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = form.handleSubmit((data: LoginCredentials) => {
    if (!data) return;
    loginUser(data);
  });

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
          <Form {...form}>
            <form onSubmit={handleFormSubmit} className="space-y-4">
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
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending && (
                  <TimerIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Zaloguj się
              </Button>
            </form>
          </Form>
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
