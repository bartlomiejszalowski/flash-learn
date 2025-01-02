type Props = {
  content: string;
};

export const TestimonialBody: React.FC<Props> = ({ content }) => {
  return <p className="italic">{content}</p>;
};
