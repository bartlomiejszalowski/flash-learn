import {
  TableHead,
  TableHeader as Header,
  TableRow,
} from "@/components/ui/table";

interface Props {
  firstHead: string;
  secondHead?: string;
  thirdHead: string;
}

export const TableHeader: React.FC<Props> = ({
  firstHead,
  secondHead,
  thirdHead,
}) => {
  return (
    <Header>
      <TableRow>
        <TableHead className="w-[100px]">{firstHead}</TableHead>
        {secondHead && <TableHead>{secondHead}</TableHead>}
        <TableHead className="text-right">{thirdHead}</TableHead>
      </TableRow>
    </Header>
  );
};
