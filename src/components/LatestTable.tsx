import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { studentData } from "@/assets/data";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
interface Student {
  EnrNo: string;
  Fname: string;
  Lname: string;
  Cname: string;
  Fees: number;
  EnrDate: string;
}
const itemsPerPage = 5;
export default function LatestTable() {
  const [studentsData, setStudentsData] = useState<Student[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    localStorage.setItem("studentData", JSON.stringify(studentData));

    const stData: Student[] = JSON.parse(
      localStorage.getItem("studentData") || "[]"
    );

    setStudentsData(stData);
  }, []);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const data = studentsData.slice(startIndex, endIndex);
  const totalPage = Math.ceil(studentsData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
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
          {data.map((invoice, index) => (
            <TableRow key={index}>
              <TableCell>{invoice.EnrNo}</TableCell>
              <TableCell className="text-center">
                {invoice.Fname + invoice.Lname}
              </TableCell>
              <TableCell className="text-center">{invoice.Cname}</TableCell>
              <TableCell className="text-center">{invoice.Fees}</TableCell>
              <TableCell className=" text-right pr-5">
                {invoice.EnrDate}
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
