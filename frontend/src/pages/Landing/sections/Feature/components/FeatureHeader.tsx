import { FeatureType } from "@/types/general";

type Props = {
  feature: FeatureType;
};

export const FeatureHeader: React.FC<Props> = ({ feature }) => {
  return (
    <div className="flex flex-row">
      {feature.icon}
      <span className="ml-2">{feature.title}</span>
    </div>
  );
};
