import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { studentData } from "../assets/data";
import { useState } from "react";
import { Button } from "./ui/button";

const itemsPerPage = 5;
export default function BestStudentTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const data = studentData.slice(startIndex, endIndex);
  const totalPage = Math.ceil(studentData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
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
          {data.map((invoice, index) => (
            <TableRow key={index}>
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
      <div className=" p-2 m-2 text-center">
        {currentPage > 1 && (
          <Button
            variant="secondary"
            onClick={() => handlePageChange(currentPage - 1)}
            className=" ml-2 mr-2"
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
            style={{ marginLeft: "8px" }}
          >
            {index + 1}
          </Button>
        ))}
        {currentPage < totalPage && (
          <Button
            variant="secondary"
            className=" ml-2 mr-2"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        )}
      </div>
    </>
  );
}
