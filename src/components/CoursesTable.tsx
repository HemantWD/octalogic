import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Action from "./Action";

const invoices = [
  {
    name: "Classical Guitar",
    desc: "Guitar classes ",
    instructor: "Ms. Jane Doe",
    instrument: "Guitar",
    day: "Wednesday",
    student: "26",
    price: "$60",
    status: "Active",
  },
  {
    name: "Column",
    desc: "column ",
    instructor: "column",
    instrument: "column",
    day: "column",
    student: "column",
    price: "column",
    status: "Active",
  },
  {
    name: "Column",
    desc: "column ",
    instructor: "column",
    instrument: "column",
    day: "column",
    student: "column",
    price: "column",
    status: "Active",
  },
  {
    name: "Column",
    desc: "column ",
    instructor: "column",
    instrument: "column",
    day: "column",
    student: "column",
    price: "column",
    status: "Closed",
  },
  {
    name: "Column",
    desc: "column ",
    instructor: "column",
    instrument: "column",
    day: "column",
    student: "column",
    price: "column",
    status: "Closed",
  },
  {
    name: "Column",
    desc: "column ",
    instructor: "column",
    instrument: "column",
    day: "column",
    student: "column",
    price: "column",
    status: "Closed",
  },
  {
    name: "Column",
    desc: "column ",
    instructor: "column",
    instrument: "column",
    day: "column",
    student: "column",
    price: "column",
    status: "Closed",
  },
  {
    name: "Column",
    desc: "column ",
    instructor: "column",
    instrument: "column",
    day: "column",
    student: "column",
    price: "column",
    status: "Archived",
  },
  {
    name: "Column",
    desc: "column ",
    instructor: "column",
    instrument: "column",
    day: "column",
    student: "column",
    price: "column",
    status: "Archived",
  },
  {
    name: "Column",
    desc: "column ",
    instructor: "column",
    instrument: "column",
    day: "column",
    student: "column",
    price: "column",
    status: "Archived",
  },
];
const getStatus = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-200";
    case "Closed":
      return "bg-pink-200";
    case "Archived":
      return "bg-gray-200";
    default:
      return "";
  }
};

export default function CoursesTable() {
  return (
    <Table className="w-full ">
      <TableHeader>
        <TableRow>
          <TableHead className="">Name</TableHead>
          <TableHead className="text-center ">Description</TableHead>
          <TableHead className="text-center ">Instructor</TableHead>
          <TableHead className="text-center ">Instrument</TableHead>
          <TableHead className="text-center ">Day of Week</TableHead>
          <TableHead className="text-center"># of Student</TableHead>
          <TableHead className="text-center">Price</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.name}>
            <TableCell>{invoice.name}</TableCell>
            <TableCell className="text-center">{invoice.desc}</TableCell>
            <TableCell className="text-center">{invoice.instructor}</TableCell>
            <TableCell className="text-center">{invoice.instrument}</TableCell>
            <TableCell className="text-center">{invoice.day}</TableCell>
            <TableCell className="text-center">{invoice.student}</TableCell>
            <TableCell className="text-center">{invoice.price}</TableCell>
            <TableCell
              className={`text-center border rounded-lg p-2 ${getStatus(
                invoice.status
              )} `}
            >
              {invoice.status}
            </TableCell>
            <TableCell className=" text-center cursor-pointer ">
              <Action />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
