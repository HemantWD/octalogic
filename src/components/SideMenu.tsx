import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import home from "../assets/home.png";
import course from "../assets/course.png";
import logout from "../assets/logout.png";

const SideMenu = () => {
  return (
    <div className="bg-white w-36 h-screen border-2 flex flex-col justify-between">
      <div>
        <div className="p-4 flex justify-center items-center text-gray-500 text-2xl font-bold">
          <img src={logo} alt="logo" />
        </div>

        <ul className="py-4">
          <li className="mb-2">
            <NavLink
              to="/home"
              className="px-4 py-2 flex justify-center items-center flex-col  text-black bg-gray-300 border m-4 rounded-md"
            >
              <img src={home} alt="" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/course"
              className="px-4 py-2 flex justify-center items-center flex-col  text-black bg-gray-300 border m-4 rounded-md"
            >
              <img src={course} alt="" />
              Courses
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="px-4 py-2 flex justify-center items-center flex-col">
        <img src={logout} alt="" />
        <a href="/">Logout</a>
      </div>
    </div>
  );
};

export default SideMenu;
