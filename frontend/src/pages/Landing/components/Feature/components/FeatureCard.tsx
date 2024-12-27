import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FeatureType } from "@/types/general";

type Props = {
  feature: FeatureType;
};

export const FeatureCard: React.FC<Props> = ({ feature }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {feature.icon}
          <span className="ml-2">{feature.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{feature.description}</p>
      </CardContent>
    </Card>
  );
};
