import { AvaiableCollectionType } from "@/@Types/general";

import { LearnHeader } from "./components/LearnHeader";
import { LearnProgressCard } from "./components/LearnProgressCard/LearnProgressCard";

interface LearningModesViewProps {
  collection: AvaiableCollectionType;
  onExit: () => void;
}

export const Learn: React.FC<LearningModesViewProps> = ({ collection }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-2xl mx-auto">
        <LearnHeader collectionName={collection.name} />

        <LearnProgressCard />

        {/* <div className="space-y-4 mb-8">
          {modes.map((mode) => (
            <Card
              key={mode.id}
              className={`cursor-pointer transition-all duration-300 ${
                mode.completed
                  ? "bg-green-100 border-green-500"
                  : "hover:shadow-md"
              }`}
              onClick={() => toggleMode(mode.id)}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    {mode.icon}
                    <span className="ml-2">{mode.name}</span>
                  </span>
                  <span className="text-sm font-normal flex items-center">
                    <Trophy className="h-4 w-4 mr-1 text-yellow-500" />
                    {mode.points} pkt
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{mode.description}</p>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-2">Efektywność nauki</h2>
            <p className="text-sm text-gray-600 mb-2">
              Po przejściu przez wszystkie 9 trybów, większość słówek powinna
              stać się już znajoma. Regularne powtarzanie w tej formie znacząco
              zwiększy czas ich zapamiętania.
            </p>
            <p className="text-sm text-gray-600">
              Pamiętaj, że za ukończenie każdego trybu otrzymujesz określoną
              ilość punktów. Ilość punktów zależy od poziomu trudności trybu -
              im trudniejszy tryb, tym więcej punktów!
            </p>
          </CardContent>
        </Card> */}

        {/* <div className="flex justify-between">
          <Button variant="outline" onClick={onExit}>
            <RotateCcw className="mr-2 h-4 w-4" /> Powrót do kolekcji
          </Button>
          <Button>Rozpocznij naukę</Button>
        </div> */}
      </div>
    </div>
  );
};
