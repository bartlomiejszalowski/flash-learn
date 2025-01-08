import { AvaiableCollectionType } from "@/@Types/general";
import { CustomCard } from "@/components/CustomCard/CustomCard";

interface Prop {
  collection: AvaiableCollectionType;
}

export const CollectionProgress: React.FC<Prop> = ({ collection }) => {
  return <CustomCard type="collectionProgress" prop={collection} />;
};
