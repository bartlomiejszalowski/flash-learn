import { zodResolver } from "@hookform/resolvers/zod";
import { Book, Edit, Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Schema for collection form
const collectionSchema = z.object({
  name: z.string().min(1, "Nazwa kolekcji jest wymagana"),
  description: z.string().optional(),
  image: z.instanceof(FileList).optional(),
});

// Schema for flashcard form
const flashcardSchema = z.object({
  polish: z.string().min(1, "Słowo po polsku jest wymagane"),
  english: z.string().min(1, "Słowo po angielsku jest wymagane"),
  example: z.string().optional(),
});

type CollectionFormValues = z.infer<typeof collectionSchema>;
type FlashcardFormValues = z.infer<typeof flashcardSchema>;

// Mock data for existing collections
const mockCollections = [
  {
    id: 1,
    name: "Podstawowe słownictwo",
    cardCount: 50,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Czasowniki nieregularne",
    cardCount: 30,
    image: "/placeholder.svg",
  },
  { id: 3, name: "Idiomy", cardCount: 25, image: "/placeholder.svg" },
];

export const MyCollections = () => {
  const [collections, setCollections] = useState(mockCollections);
  const [isAddFlashcardModalOpen, setIsAddFlashcardModalOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<number | null>(
    null
  );

  const {
    register: registerCollection,
    handleSubmit: handleSubmitCollection,
    formState: { errors: collectionErrors },
  } = useForm<CollectionFormValues>({
    resolver: zodResolver(collectionSchema),
  });

  const {
    register: registerFlashcard,
    handleSubmit: handleSubmitFlashcard,
    formState: { errors: flashcardErrors },
  } = useForm<FlashcardFormValues>({
    resolver: zodResolver(flashcardSchema),
  });

  const onSubmitCollection = (data: CollectionFormValues) => {
    // Handle collection creation logic here
    console.log("New collection:", data);
    const newCollection = {
      id: collections.length + 1,
      name: data.name,
      cardCount: 0,
      image:
        data.image && data.image[0]
          ? URL.createObjectURL(data.image[0])
          : "/placeholder.svg",
    };
    setCollections([...collections, newCollection]);
  };

  const onSubmitFlashcard = (data: FlashcardFormValues) => {
    // Handle flashcard creation logic here
    console.log("New flashcard for collection", selectedCollection, ":", data);
    setIsAddFlashcardModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Moje kolekcje</h1>

      {/* Add new collection form */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Dodaj nową kolekcję</CardTitle>
          <CardDescription>Stwórz nową kolekcję fiszek</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmitCollection(onSubmitCollection)}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="name">Nazwa kolekcji</Label>
              <Input id="name" {...registerCollection("name")} />
              {collectionErrors.name && (
                <p className="text-red-500 text-sm">
                  {collectionErrors.name.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="description">Opis (opcjonalnie)</Label>
              <Textarea
                id="description"
                {...registerCollection("description")}
              />
            </div>
            <div>
              <Label htmlFor="image">Zdjęcie (opcjonalnie)</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                {...registerCollection("image")}
              />
            </div>
            <Button type="submit">Dodaj kolekcję</Button>
          </form>
        </CardContent>
      </Card>

      {/* Existing collections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <Card key={collection.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{collection.name}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setSelectedCollection(collection.id);
                    setIsAddFlashcardModalOpen(true);
                  }}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </CardTitle>
              <CardDescription>{collection.cardCount} fiszek</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={collection.image || "/placeholder.svg"}
                alt={collection.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="mt-4 flex justify-between">
                <Button variant="outline" className="flex items-center">
                  <Book className="mr-2 h-4 w-4" /> Przeglądaj
                </Button>
                <Button variant="outline" className="flex items-center">
                  <Edit className="mr-2 h-4 w-4" /> Edytuj
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add flashcard modal */}
      <Dialog
        open={isAddFlashcardModalOpen}
        onOpenChange={setIsAddFlashcardModalOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dodaj nową fiszkę</DialogTitle>
            <DialogDescription>
              Dodaj nową fiszkę do wybranej kolekcji
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={handleSubmitFlashcard(onSubmitFlashcard)}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="polish">Słowo po polsku</Label>
              <Input id="polish" {...registerFlashcard("polish")} />
              {flashcardErrors.polish && (
                <p className="text-red-500 text-sm">
                  {flashcardErrors.polish.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="english">Słowo po angielsku</Label>
              <Input id="english" {...registerFlashcard("english")} />
              {flashcardErrors.english && (
                <p className="text-red-500 text-sm">
                  {flashcardErrors.english.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="example">Przykładowe zdanie (opcjonalnie)</Label>
              <Textarea id="example" {...registerFlashcard("example")} />
            </div>
            <Button type="submit">Dodaj fiszkę</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
