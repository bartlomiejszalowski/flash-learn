import { Progress } from "@/components/ui/progress";

interface Props {
  description: string;
}

export const CollectionProgressBody: React.FC<Props> = ({ description }) => {
  return (
    <>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex-1 mr-4">
          <Progress value={80} className="w-full" />
        </div>
        <span className="text-sm font-medium">20%</span>
      </div>
    </>
  );
};
