import { AvaiableCollectionType } from "@/@Types/general";
import { CustomCardHeader } from "@/components/CustomCard/CustomCardHeader";

type Props = {
  avaiableCollection: AvaiableCollectionType;
};

export const AvaiableCollectionListHeader: React.FC<Props> = ({
  avaiableCollection: { Icon, name },
}) => {
  return <CustomCardHeader Icon={Icon} children={<span> {name}</span>} />;
};
