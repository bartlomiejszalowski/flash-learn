import { CustomCardHeader } from "@/pages/Landing/components/CustomCard/CustomCardHeader";
import { AvaiableCollectionType } from "@/types/general";

type Props = {
  avaiableCollection: AvaiableCollectionType;
};

export const AvaiableCollectionListHeader: React.FC<Props> = ({
  avaiableCollection: { Icon, name },
}) => {
  return <CustomCardHeader Icon={Icon} children={<span> {name}</span>} />;
};
