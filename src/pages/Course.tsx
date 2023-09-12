import SideMenu from "@/components/SideMenu";
import search from "../assets/search.png";
import CoursesTable from "@/components/CoursesTable";
import { AddCourse } from "@/components/AddCourse";

const Course = () => {
  return (
    <div className="flex gap-5   bg-gray-200">
      <SideMenu />
      <div className="flex-grow m-2">
        <p className=" text-gray-500 text-4xl m-4"> Courses</p>
        <div className="flex items-center justify-between">
          <p className=" text-gray-500 text-lg font-medium m-4">Courses List</p>
          <div className=" relative">
            <input
              className=" border rounded p-1 pl-8"
              placeholder="Search"
              type="search"
            />
            <img src={search} alt="" className=" absolute bottom-2 left-2 " />
          </div>
        </div>
        <div className="border bg-white rounded-md">
          <CoursesTable />
        </div>
        <div className="flex justify-end m-8">
          <AddCourse />
        </div>
      </div>
    </div>
  );
};

export default Course;
