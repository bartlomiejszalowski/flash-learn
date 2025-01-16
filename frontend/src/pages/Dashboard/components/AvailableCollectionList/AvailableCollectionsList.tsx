import { Link } from "@tanstack/react-router";

import { AvaiableCollectionType } from "@/@Types/general";
import { CustomCard } from "@/components/CustomCard/CustomCard";
import { availableCollections } from "@/constants/avaiableCollections";

import { AvaiableCollectionListInfo } from "./components/AvaiableCollectionListInfo";

export const AvailableCollectionsList = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableCollections.map((collection: AvaiableCollectionType) => (
          <Link
            to="/collections/$collectionId"
            params={{ collectionId: collection.id }}
            key={collection.id}
          >
            <div className="hover:shadow-lg transition-shadow">
              <CustomCard type="avaiableCollection" prop={collection} />
            </div>
          </Link>
        ))}
      </div>
      <AvaiableCollectionListInfo />
    </div>
  );
};
