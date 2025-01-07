import { FeatureType } from "@/@Types/general";
import { CustomCardHeader } from "@/components/CustomCard/CustomCardHeader";

type Props = {
  feature: FeatureType;
};

export const FeatureHeader: React.FC<Props> = ({ feature }) => {
  return (
    <CustomCardHeader
      Icon={feature.Icon}
      children={<span className="ml-2">{feature.title}</span>}
    />
  );
};
