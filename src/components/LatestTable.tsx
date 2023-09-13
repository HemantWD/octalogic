import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { latestEnrollment } from "@/assets/data";

export default function LatestTable() {
  return (
    <Table className="w-full ">
      <TableHeader>
        <TableRow>
          <TableHead className=" font-bold text-black">Enr.No</TableHead>
          <TableHead className=" font-bold text-black text-center">
            S.Name
          </TableHead>
          <TableHead className=" font-bold text-black text-center">
            C.Name
          </TableHead>
          <TableHead className=" font-bold text-black text-center">
            Fees
          </TableHead>
          <TableHead className=" font-bold text-black text-right pr-5">
            Enr.Date
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {latestEnrollment.map((invoice) => (
          <TableRow key={invoice.EnrNo}>
            <TableCell>{invoice.EnrNo}</TableCell>
            <TableCell className="text-center">{invoice.Sname}</TableCell>
            <TableCell className="text-center">{invoice.Cname}</TableCell>
            <TableCell className="text-center">{invoice.Fees}</TableCell>
            <TableCell className=" text-right pr-5">
              {invoice.EnrDate}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
