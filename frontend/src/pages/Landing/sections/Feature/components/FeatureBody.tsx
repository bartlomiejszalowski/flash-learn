type Props = {
  description: string;
};

export const FeatureBody: React.FC<Props> = ({ description }) => {
  return <p>{description}</p>;
};
