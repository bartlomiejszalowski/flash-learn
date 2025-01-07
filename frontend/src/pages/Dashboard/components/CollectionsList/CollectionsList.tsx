import { Link } from "@tanstack/react-router";

import { CollectionType } from "@/@Types/general";
import { CustomCard } from "@/components/CustomCard/CustomCard";

interface Props {
  collections: CollectionType[];
}

export const CollectionsList: React.FC<Props> = ({ collections }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {collections.map((collection: CollectionType) => (
        <Link href={`/collection/${collection.id}`} key={collection.id}>
          <CustomCard type="collectionList" prop={collection} />
        </Link>
      ))}
    </div>
  );
};
