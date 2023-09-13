import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Action from "./Action";
import { useState } from "react";
import { Button } from "./ui/button";
import { invoices } from "../assets/data";

const itemsPerPage = 10;

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
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleInvoices = invoices.slice(startIndex, endIndex);
  const totalPage = Math.ceil(invoices.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Table className="w-full  ">
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
          {visibleInvoices.map((invoice) => (
            <TableRow key={invoice.name}>
              <TableCell>{invoice.name}</TableCell>
              <TableCell className="text-center">{invoice.desc}</TableCell>
              <TableCell className="text-center">
                {invoice.instructor}
              </TableCell>
              <TableCell className="text-center">
                {invoice.instrument}
              </TableCell>
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
      {/* Pagination Part */}
      <div>
        {currentPage > 1 && (
          <Button
            variant="secondary"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
        )}
        {Array.from({ length: totalPage }).map((_, index) => (
          <Button
            variant="secondary"
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </Button>
        ))}
        {currentPage < totalPage && (
          <Button
            variant="secondary"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        )}
      </div>
    </>
  );
}
