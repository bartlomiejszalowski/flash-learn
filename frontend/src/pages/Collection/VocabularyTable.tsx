import {
  CheckCircle,
  Edit,
  ImageIcon,
  Plus,
  Trash,
  XCircle,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { useCollectionStore } from "@/store/Collection/collectionStore";

export const VocabularyTable = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState<null>(null);
  const [newWord, setNewWord] = useState({
    polish: "",
    english: "",
    example: "",
    image: "",
  });

  //   const handleAddWord = () => {
  //     if (onAddWord && newWord.polish && newWord.english) {
  //       onAddWord(newWord);
  //       setNewWord({
  //         polish: "",
  //         english: "",
  //         example: "",
  //         image: "",
  //       });
  //       setIsAddDialogOpen(false);
  //     }
  //   };

  //   const handleEditWord = () => {
  //     if (onEditWord && currentWord) {
  //       onEditWord(currentWord);
  //       setIsEditDialogOpen(false);
  //     }
  //   };

  //   const handleDeleteWord = () => {
  //     if (onDeleteWord && currentWord) {
  //       onDeleteWord(currentWord.id);
  //       setIsDeleteDialogOpen(false);
  //     }
  //   };

  const collection = useCollectionStore((state) => state.selectedCollection);

  const vocabulary = collection?.vocabulary;

  if (!vocabulary) {
    return <div>Collection not found</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Słówka w kolekcji</h3>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Dodaj słówko
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Polski</TableHead>
            <TableHead>Angielski</TableHead>
            <TableHead>Zdjęcie</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Akcje</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vocabulary.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.translation}</TableCell>
              <TableCell>{item.word}</TableCell>
              <TableCell>
                {item.image ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    // onClick={() => {
                    //   setCurrentWord(item);
                    //   setIsImagePreviewOpen(true);
                    // }}
                  >
                    <ImageIcon className="h-5 w-5 text-blue-500" />
                  </Button>
                ) : (
                  "-"
                )}
              </TableCell>
              <TableCell>
                {/* <Button
                  variant="ghost"
                  //   onClick={() => onToggleStatus && onToggleStatus(item.id)}
                >
                  {item.learned ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </Button> */}
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    // onClick={() => {
                    //   setCurrentWord(item);
                    //   setIsEditDialogOpen(true);
                    // }}
                  >
                    <Edit className="h-4 w-4 text-blue-500" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    // onClick={() => {
                    //   setCurrentWord(item);
                    //   setIsDeleteDialogOpen(true);
                    // }}
                  >
                    <Trash className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Add Word Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Dodaj nowe słówko</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="polish" className="text-right">
                Polski
              </Label>
              <Input
                id="polish"
                value={newWord.polish}
                // onChange={(e) =>
                //   setNewWord({ ...newWord, polish: e.target.value })
                // }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="english" className="text-right">
                Angielski
              </Label>
              <Input
                id="english"
                value={newWord.english}
                onChange={(e) =>
                  setNewWord({ ...newWord, english: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="example" className="text-right">
                Przykład
              </Label>
              <Textarea
                id="example"
                value={newWord.example}
                onChange={(e) =>
                  setNewWord({ ...newWord, example: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                URL zdjęcia
              </Label>
              <Input
                id="image"
                value={newWord.image}
                onChange={(e) =>
                  setNewWord({ ...newWord, image: e.target.value })
                }
                className="col-span-3"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={() => {}}>Dodaj słówko</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Word Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edytuj słówko</DialogTitle>
          </DialogHeader>
          {currentWord && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-polish" className="text-right">
                  Polski
                </Label>
                <Input
                  id="edit-polish"
                  //   value={currentWord.polish}
                  //   onChange={(e) =>
                  //     setCurrentWord({ ...currentWord, polish: e.target.value })
                  //   }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-english" className="text-right">
                  Angielski
                </Label>
                <Input
                  id="edit-english"
                  //   value={currentWord.english}
                  //   onChange={(e) =>
                  //     setCurrentWord({ ...currentWord, english: e.target.value })
                  //   }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-example" className="text-right">
                  Przykład
                </Label>
                <Textarea
                  id="edit-example"
                  //   value={currentWord.example || ""}
                  //   onChange={(e) =>
                  //     setCurrentWord({ ...currentWord, example: e.target.value })
                  //   }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-image" className="text-right">
                  URL zdjęcia
                </Label>
                <Input
                  id="edit-image"
                  //   value={currentWord.image || ""}
                  //   onChange={(e) =>
                  //     setCurrentWord({ ...currentWord, image: e.target.value })
                  //   }
                  className="col-span-3"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
          )}
          <div className="flex justify-end">
            <Button onClick={() => {}}>Zapisz zmiany</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Word Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Usuń słówko</DialogTitle>
          </DialogHeader>
          <p>
            {/* Czy na pewno chcesz usunąć słówko "{currentWord?.polish} -{" "}
            {currentWord?.english}"? */}
          </p>
          <div className="flex justify-end space-x-2">
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Anuluj
            </Button>
            <Button variant="destructive" onClick={() => {}}>
              Usuń
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Preview Dialog */}
      <Dialog open={isImagePreviewOpen} onOpenChange={setIsImagePreviewOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {/* Zdjęcie dla słówka: {currentWord?.polish} - {currentWord?.english} */}
            </DialogTitle>
          </DialogHeader>
          <div className="flex justify-center">
            {/* {currentWord?.image && (
              <img
                src={currentWord.image || "/placeholder.svg"}
                alt={`${currentWord.polish} - ${currentWord.english}`}
                className="max-w-full max-h-[400px] object-contain rounded-md"
              />
            )} */}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
