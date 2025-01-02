import { LearningEffectivenessItemType } from "@/types/general";

type Props = {
  item: LearningEffectivenessItemType;
};
export const LearningEffectivenessItem: React.FC<Props> = ({
  item: { Icon, label, description },
}) => {
  return (
    <div className="flex items-start">
      {Icon}
      <div>
        <h3 className="font-semibold mb-1">{label}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};
