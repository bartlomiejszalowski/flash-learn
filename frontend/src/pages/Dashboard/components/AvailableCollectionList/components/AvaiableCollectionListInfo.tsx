import { TrendingUp } from "lucide-react";

export const AvaiableCollectionListInfo = () => {
  return (
    <div className="mt-8 bg-blue-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold flex items-center mb-2">
        <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
        Stale rosnąca baza fiszek
      </h3>
      <p>
        Nasze kolekcje są regularnie aktualizowane i poszerzane przez zespół
        ekspertów językowych. Dzięki temu masz zawsze dostęp do aktualnego i
        różnorodnego materiału do nauki.
      </p>
    </div>
  );
};
