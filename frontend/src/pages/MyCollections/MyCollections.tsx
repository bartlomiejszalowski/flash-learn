import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { NewCollectionType } from "@/@Types/collections";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CreateCollectionForm } from "@/form/forms";
import { createCollectionSchema } from "@/form/schema";
import { useCreateCollection } from "@/hooks/useCollectionQueryActions";
import { fileToBase64 } from "@/utils/fileToBase64";

export const MyCollections = () => {
  const form = useForm<CreateCollectionForm>({
    resolver: zodResolver(createCollectionSchema),
    defaultValues: {
      name: "",
      description: "",
      collectionImage: null, // File | string | null
    },
  });

  const { createCollection } = useCreateCollection();

  const handleFormSubmit = form.handleSubmit(async (data) => {
    let collectionImage: string | null = null;

    if (data.collectionImage instanceof File) {
      // Konwersja pliku do base64
      collectionImage = await fileToBase64(data.collectionImage);
    }

    const payload: NewCollectionType = {
      name: data.name,
      description: data.description,
      collectionImage, // base64 lub null / string (jeśli zostaje z backendu)
    };

    console.log(payload);
    createCollection(payload);
  });

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
          <Form {...form}>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <Label htmlFor="name">Nazwa kolekcji</Label>
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field }) => <Input id="name" {...field} />}
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              {/* Description Field */}
              <div>
                <Label htmlFor="description">Opis (opcjonalnie)</Label>
                <Controller
                  name="description"
                  control={form.control}
                  render={({ field }) => (
                    <Textarea id="description" {...field} />
                  )}
                />
              </div>

              {/* File Upload Field */}
              <div>
                <Label htmlFor="collectionImage">Zdjęcie (opcjonalnie)</Label>
                <Controller
                  name="collectionImage"
                  control={form.control}
                  render={({ field: { onChange } }) => (
                    <Input
                      id="collectionImage"
                      type="file"
                      accept="image/*"
                      multiple={false}
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        onChange(file);
                      }}
                    />
                  )}
                />
              </div>
              <Button type="submit">Dodaj kolekcję</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Existing collections */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div> */}

      {/* Add flashcard modal */}
      {/* <Dialog
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
      </Dialog> */}
    </div>
  );
};
