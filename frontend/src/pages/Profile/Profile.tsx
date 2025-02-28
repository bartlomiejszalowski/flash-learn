import { Link } from "@tanstack/react-router";
import { Book, Camera, Pencil, Trophy } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Mock data for user profile
const mockUserProfile = {
  name: "Jan Kowalski",
  email: "jan.kowalski@example.com",
  gender: "male" as const,
  bio: "Pasjonat nauki języków obcych i podróżnik. Uwielbiam poznawać nowe kultury poprzez ich języki.",
  avatar: "/placeholder.svg",
  points: 1250,
  rank: 15,
  wordsLearned: 500,
  streak: 7,
};

export const Profile = () => {
  const [profile, setProfile] = useState(mockUserProfile);
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: mockUserProfile.name,
      email: mockUserProfile.email,
      gender: mockUserProfile.gender,
      bio: mockUserProfile.bio,
    },
  });

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <div className="relative inline-block">
          <Avatar
            className="w-32 h-32 border-4 border-white shadow-lg"
            onMouseEnter={() => setIsAvatarHovered(true)}
            onMouseLeave={() => setIsAvatarHovered(false)}
          >
            <AvatarImage src={profile.avatar} alt={profile.name} />
            <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <Label
            htmlFor="avatar"
            className={`absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer transition-opacity duration-200 ${isAvatarHovered ? "opacity-100" : "opacity-0"}`}
          >
            <Camera className="h-5 w-5" />
            <Input
              id="avatar"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </Label>
        </div>
        <h1 className="text-3xl font-bold mt-4">{profile.name}</h1>
        <p className="text-gray-600">Miejsce w rankingu: #{profile.rank}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="flex flex-col items-center justify-center h-full p-6">
            <Trophy className="h-8 w-8 text-yellow-500 mb-2" />
            <p className="text-2xl font-bold">{profile.points}</p>
            <p className="text-gray-600">Punkty</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center h-full p-6">
            <Book className="h-8 w-8 text-green-500 mb-2" />
            <p className="text-2xl font-bold">{profile.wordsLearned}</p>
            <p className="text-gray-600">Nauczone słowa</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center h-full p-6">
            <Pencil className="h-8 w-8 text-blue-500 mb-2" />
            <p className="text-2xl font-bold">{profile.streak} dni</p>
            <p className="text-gray-600">Seria nauki</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit(() => {})} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Imię</Label>
                <Controller
                  name="name"
                  control={control} // <-- DODANE
                  render={({ field }) => <Input id="name" {...field} />}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Controller
                  name="email"
                  control={control} // <-- DODANE
                  render={({ field }) => <Input id="email" {...field} />}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Płeć</Label>
              <Controller
                name="gender"
                control={control} // <-- DODANE
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Wybierz płeć" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Mężczyzna</SelectItem>
                      <SelectItem value="female">Kobieta</SelectItem>
                      <SelectItem value="other">Inna</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Controller
                name="bio"
                control={control} // <-- DODANE
                render={({ field }) => <Textarea id="bio" {...field} />}
              />
            </div>
            <div className="flex justify-between items-center">
              <Button type="submit">Zapisz zmiany</Button>
              <Button asChild variant="outline">
                <Link href="/my-collections">
                  <Book className="mr-2 h-4 w-4" />
                  Moje kolekcje
                </Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
