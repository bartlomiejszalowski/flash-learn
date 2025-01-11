import { Progress } from "@radix-ui/react-progress";

export const LearnProgressCardBody = () => {
  return (
    <div className="pt-6 mb-8">
      <h2 className="text-xl font-semibold mb-2">Postęp nauki</h2>
      <Progress value={80} className="w-full h-4" />
      <p className="text-sm text-gray-600 mt-2">Ukończono 5 z 9 trybów</p>
    </div>
  );
};
