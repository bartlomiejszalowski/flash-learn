import React from "react";

interface Props {
  description: string;
}

export const LearnModeCardBody: React.FC<Props> = ({ description }) => {
  return <p className="text-sm text-gray-600">{description}</p>;
};
