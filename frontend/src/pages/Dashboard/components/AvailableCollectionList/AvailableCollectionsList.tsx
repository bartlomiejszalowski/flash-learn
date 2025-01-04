import { Link } from "@tanstack/react-router";

import { availableCollections } from "@/constants/avaiableCollections";
import { CustomCard } from "@/pages/Landing/components/CustomCard";
import { AvaiableCollectionType } from "@/types/general";

export const AvailableCollectionsList = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableCollections.map((collection: AvaiableCollectionType) => (
          <Link href={`/collection/${collection.id}`} key={collection.id}>
            <div className="hover:shadow-lg transition-shadow">
              //make card smaller and square and add more icons
              <CustomCard type="avaiableCollection" prop={collection} />
            </div>
          </Link>
        ))}
      </div>
      {/* <div className="mt-8 bg-blue-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold flex items-center mb-2">
          <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
          Stale rosnąca baza fiszek
        </h3>
        <p>
          Nasze kolekcje są regularnie aktualizowane i poszerzane przez zespół
          ekspertów językowych. Dzięki temu masz zawsze dostęp do aktualnego i
          różnorodnego materiału do nauki.
        </p>
      </div> */}
    </div>
  );
};
