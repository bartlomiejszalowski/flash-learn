import { Volume2 } from "lucide-react";
import React from "react";

import { Button } from "../ui/button";

interface Props {
  speakWord: () => void;
}

export const AudioButton: React.FC<Props> = ({ speakWord }) => {
  return (
    <div className="flex justify-center mb-8">
      <Button onClick={speakWord} variant="outline" size="lg">
        <Volume2 className="mr-2 h-6 w-6" />
      </Button>
    </div>
  );
};
