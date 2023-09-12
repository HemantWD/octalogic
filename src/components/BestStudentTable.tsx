import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    RegNo: "43422",
    Fname: "John",
    Lname: "Doe",
    Course: "3",
    Fees: "$300",
    RegDate: "01-06-2023",
  },
  {
    RegNo: "column",
    Fname: "column",
    Lname: "column",
    Course: "column",
    Fees: "column",
    RegDate: "column",
  },
  {
    RegNo: "column",
    Fname: "column",
    Lname: "column",
    Course: "column",
    Fees: "column",
    RegDate: "column",
  },
  {
    RegNo: "column",
    Fname: "column",
    Lname: "column",
    Course: "column",
    Fees: "column",
    RegDate: "column",
  },
  {
    RegNo: "column",
    Fname: "column",
    Lname: "column",
    Course: "column",
    Fees: "column",
    RegDate: "column",
  },
  {
    RegNo: "column",
    Fname: "column",
    Lname: "column",
    Course: "column",
    Fees: "column",
    RegDate: "column",
  },
];

export default function BestStudentTable() {
  return (
    <Table className="w-full ">
      <TableHeader>
        <TableRow>
          <TableHead className=" font-bold text-black">Reg. No</TableHead>
          <TableHead className=" font-bold text-black text-center">
            F.Name
          </TableHead>
          <TableHead className=" font-bold text-black text-center">
            L.Name
          </TableHead>
          <TableHead className=" font-bold text-black text-center">
            Course
          </TableHead>
          <TableHead className=" font-bold text-black text-center">
            Fees
          </TableHead>
          <TableHead className=" font-bold text-black text-right pr-5">
            Reg. Date
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.RegNo}>
            <TableCell>{invoice.RegNo}</TableCell>
            <TableCell className="text-center">{invoice.Fname}</TableCell>
            <TableCell className="text-center">{invoice.Lname}</TableCell>
            <TableCell className="text-center">{invoice.Course}</TableCell>
            <TableCell className="text-center">{invoice.Fees}</TableCell>
            <TableCell className=" text-right pr-5">
              {invoice.RegDate}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
