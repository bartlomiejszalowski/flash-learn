import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { Book, Camera, Pencil, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { UpdatedUserData } from "@/@Types/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
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
import { UpdateUserProfileForm } from "@/form/forms";
import { updateUserProfileSchema } from "@/form/schema";
import {
  useGetUserProfile,
  useUpdateUserProfile,
} from "@/hooks/useUserQueryActions";
import { profilePage } from "@/router/router";

export const Profile = () => {
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  const { userId } = profilePage.useParams();

  const { userProfile, isLoading } = useGetUserProfile(userId);

  const { updateUserProfile } = useUpdateUserProfile();

  const form = useForm<UpdateUserProfileForm>({
    resolver: zodResolver(updateUserProfileSchema),
    defaultValues: {
      nickname: "",
      bio: "",
      gender: undefined,
      profileImage: null, // File | string | null
    },
  });

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result);
        } else {
          reject(new Error("File conversion failed"));
        }
      };

      reader.onerror = (error) => reject(error);
    });
  };

  const handleFormSubmit = form.handleSubmit(async (data) => {
    let profileImage: string | null = null;

    if (data.profileImage instanceof File) {
      // Konwersja pliku do base64
      profileImage = await fileToBase64(data.profileImage);
    } else if (typeof data.profileImage === "string") {
      // Nie zmieniamy, jeśli to string (np. URL)
      profileImage = data.profileImage;
    }

    const payload: UpdatedUserData = {
      nickname: data.nickname,
      bio: data.bio,
      gender: data.gender,
      profileImage, // base64 lub null / string (jeśli zostaje z backendu)
    };

    updateUserProfile(payload);
  });

  useEffect(() => {
    if (userProfile) {
      form.reset({
        nickname: userProfile.nickname ?? "",
        bio: userProfile.bio ?? "",
        gender: userProfile.gender ?? undefined,
        profileImage: userProfile.profileImage ?? null, // URL obrazka z backendu
      });
    }
  }, [userProfile, form]);

  const avatarHandler = () => {
    let userAvatarUrl =
      userProfile?.gender === "male"
        ? "/male-default-photo.webp"
        : "/female-default-photo.webp";
    if (userProfile && userProfile?.profileImage.length > 5) {
      userAvatarUrl = userProfile?.profileImage;
    }

    return userAvatarUrl;
  };

  const userAvatarUrl = avatarHandler();

  if (isLoading) return <p>Loading...</p>;
  if (!userProfile) return <p>User not found</p>;

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <div className="relative inline-block">
          <Controller
            name="profileImage"
            control={form.control}
            render={({ field }) => {
              const value = field.value;

              const preview =
                typeof value === "string"
                  ? value // URL z backendu
                  : value instanceof File
                    ? URL.createObjectURL(value)
                    : "";

              return (
                <>
                  <Label
                    htmlFor="avatar"
                    className={`absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer transition-opacity duration-200 ${isAvatarHovered ? "opacity-100" : "opacity-0"}`}
                  >
                    <Camera className="h-5 w-5" />
                    <Input
                      id="avatar"
                      type="file"
                      accept="image/*"
                      multiple={false}
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        field.onChange(file); // plik wrzucasz do RHF
                      }}
                    />
                  </Label>

                  <Avatar
                    className="w-32 h-32 border-4 border-white shadow-lg"
                    onMouseEnter={() => setIsAvatarHovered(true)}
                    onMouseLeave={() => setIsAvatarHovered(false)}
                  >
                    <AvatarImage src={preview || userAvatarUrl} alt="Avatar" />
                    <AvatarFallback>
                      {userProfile?.nickname?.[0] ?? "U"}
                    </AvatarFallback>
                  </Avatar>
                </>
              );
            }}
          />
        </div>
        <h1 className="text-3xl font-bold mt-4">{userProfile.nickname}</h1>
        <p className="text-gray-600">Miejsce w rankingu: #7</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="flex flex-col items-center justify-center h-full p-6">
            <Trophy className="h-8 w-8 text-yellow-500 mb-2" />
            <p className="text-2xl font-bold">{userProfile.points}</p>
            <p className="text-gray-600">Punkty</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center h-full p-6">
            <Book className="h-8 w-8 text-green-500 mb-2" />
            <p className="text-2xl font-bold">{userProfile.learnedWords}</p>
            <p className="text-gray-600">Nauczone słowa</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center h-full p-6">
            <Pencil className="h-8 w-8 text-blue-500 mb-2" />
            <p className="text-2xl font-bold">88</p>
            <p className="text-gray-600">Ukończone kolekcje</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nazwa użytkownika</Label>
                <Controller
                  name="nickname"
                  control={form.control} // <-- DODANE
                  render={({ field }) => <Input id="name" {...field} />}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Płeć</Label>
                <Controller
                  name="gender"
                  control={form.control} // <-- DODANE
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={userProfile.gender} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Mężczyzna</SelectItem>
                        <SelectItem value="female">Kobieta</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Controller
                  name="bio"
                  control={form.control} // <-- DODANE
                  render={({ field }) => <Textarea id="bio" {...field} />}
                />
              </div>
              <div className="flex justify-between items-center">
                <Button type="submit">Zapisz zmiany</Button>
                <Button asChild variant="outline">
                  <Link href="/collections/my-collections">
                    <Book className="mr-2 h-4 w-4" />
                    Moje kolekcje
                  </Link>
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
