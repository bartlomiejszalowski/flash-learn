import { BookOpen } from "lucide-react";

interface Props {
  name: string;
}

export const CollectionProgressHeader: React.FC<Props> = ({ name }) => {
  return (
    <div className="flex flex-row items-center text-2xl font-medium">
      <BookOpen className="h-6 w-6 mr-2 text-blue-500" />
      {name}
    </div>
  );
};
