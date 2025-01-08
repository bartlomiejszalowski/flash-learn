import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";

export const StartLearning = () => {
  return (
    <div className="flex justify-between items-center my-6">
      <h2 className="text-2xl font-bold">Słówka w kolekcji</h2>
      <Button
        onClick={() => console.log("hello")}
        className="flex items-center bg-green-600 hover:bg-green-700"
      >
        <Play className="mr-2 h-4 w-4" /> Rozpocznij naukę
      </Button>
    </div>
  );
};
