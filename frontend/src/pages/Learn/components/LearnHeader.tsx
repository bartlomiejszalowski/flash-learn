import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  collectionName: string;
}

export const LearnHeader: React.FC<Props> = ({ collectionName }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">
        {collectionName} - <br /> Tryby nauki
      </h1>
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <p className="text-sm font-medium">Jan Kowalski</p>
          <p className="text-xs text-gray-500">Punkty: 1337 (dziś: + 32)</p>
        </div>
        <Avatar>
          <AvatarImage
            src="/placeholder.svg?height=40&width=40"
            alt="Jan Kowalski"
          />
          <AvatarFallback>JK</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
