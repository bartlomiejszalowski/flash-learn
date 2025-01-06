import { BookOpen } from "lucide-react";

type Props = {
  name: string;
};

export const CollectionsListHeader: React.FC<Props> = ({ name }) => {
  return (
    <>
      <BookOpen className="h-6 w-6 mr-2 text-blue-500" />
      {name}
    </>
  );
};
