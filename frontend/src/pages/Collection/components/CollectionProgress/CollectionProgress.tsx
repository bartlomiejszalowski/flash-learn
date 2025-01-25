import { CustomCard } from "@/components/CustomCard/CustomCard";
import { useCollectionStore } from "@/store/collectionStore";

export const CollectionProgress = () => {
  const collection = useCollectionStore((state) => state.selectedCollection);

  if (!collection) return <div>Collection not found</div>;

  return <CustomCard type="collectionProgress" prop={collection} />;
};
