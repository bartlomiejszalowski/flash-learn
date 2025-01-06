type Props = {
  cardCount: number;
};

export const CollectionListBody: React.FC<Props> = ({ cardCount }) => {
  return <p className="text-gray-600">{cardCount} fiszek</p>;
};
