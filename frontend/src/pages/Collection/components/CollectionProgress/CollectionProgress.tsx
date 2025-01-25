import { CustomCard } from "@/components/CustomCard/CustomCard";
import { availableCollections } from "@/constants/avaiableCollections";
import { useCollectionStore } from "@/store/collectionStore";

export const CollectionProgress = () => {
  const collectionId = useCollectionStore(
    (state) => state.selectedCollectionId
  );
  const collection = availableCollections.find((c) => c.id === collectionId);

  if (!collection) return <div>Collection not found</div>;

  return <CustomCard type="collectionProgress" prop={collection} />;
};
