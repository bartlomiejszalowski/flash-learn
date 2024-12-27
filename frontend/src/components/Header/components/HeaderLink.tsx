import { Link } from "@tanstack/react-router";

type Props = {
  href: string;
  label: string;
  type: "black" | "blue";
};

export const HeaderLink: React.FC<Props> = ({ href, label, type }) => {
  return (
    <Link
      href={href}
      className={
        type === "black"
          ? "text-gray-600 hover:text-blue-600"
          : "text-2xl font-bold text-blue-600"
      }
    >
      {label}
    </Link>
  );
};
