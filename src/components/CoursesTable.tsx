import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Action from "./Action";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { invoices } from "../assets/data";

const itemsPerPage = 10;

interface Course {
  name: string;
  desc: string;
  instructor: string;
  instrument: string;
  day: string;
  student: string;
  price: string;
  status: string;
}

const getStatus = (status: String) => {
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
  const [courseData, setCourseData] = useState<Course[]>([]);
  useEffect(() => {
    // Store studentData in localStorage
    localStorage.setItem("courseData", JSON.stringify(invoices));

    // Retrieve and parse studentData from localStorag
    const coData: Course[] = JSON.parse(
      localStorage.getItem("courseData") || "[]"
    );

    // Set studentsData in state
    setCourseData(coData);
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleInvoices = courseData.slice(startIndex, endIndex);
  const totalPage = Math.ceil(courseData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
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
          {visibleInvoices.map((invoice, index) => (
            <TableRow key={index}>
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
