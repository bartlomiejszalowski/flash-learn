import { ReactNode } from "react";

import { CardTitle } from "@/components/ui/card";

type Props = {
  Icon: ReactNode;
  children: ReactNode;
};

export const CustomCardHeader: React.FC<Props> = ({ Icon, children }) => {
  return (
    <CardTitle className="flex items-center">
      {Icon}
      {children}
    </CardTitle>
  );
};
