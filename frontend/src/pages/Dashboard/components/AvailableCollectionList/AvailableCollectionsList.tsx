import { Link } from "@tanstack/react-router";

import { availableCollections } from "@/constants/avaiableCollections";
import { CustomCard } from "@/pages/Landing/components/CustomCard";
import { AvaiableCollectionType } from "@/types/general";

import { AvaiableCollectionListInfo } from "./components/AvaiableCollectionListInfo";

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
      <AvaiableCollectionListInfo />
    </div>
  );
};
