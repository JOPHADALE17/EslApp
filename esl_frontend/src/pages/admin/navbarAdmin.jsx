import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaEnvelope,
  FaBook,
  FaSignOutAlt,
} from "react-icons/fa";
import eslLogo from "../../assets/esl-logo.png";
import eslText from "../../assets/esl-text.png";

function NavItems({ icon, text, onClick }) {
  return (
    <div
      className="p-2.5 mt-2 flex items-center rounded-md px-4 cursor-pointer hover:bg-gray-300"
      onClick={onClick}
    >
      {icon}
      <span className="text-[15px] ml-4 text-black">{text}</span>
    </div>
  );
}

function NavbarAdmin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="font-[Poppins] h-screen flex flex-col">
      {/* ✅ Fixed Top Navbar */}
      <nav className="bg-gray-200 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-screen-xl flex items-center justify-between p-4 mx-auto">
          {/* Sidebar Toggle Button (Mobile) */}
          <span
            className="text-gray-900 cursor-pointer lg:hidden flex"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FaBars />
          </span>
          <p className="font-bold text-lg">Dashboard</p>
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={eslLogo} className="h-8" alt="ESL Logo" />
            <img src={eslText} className="h-8" alt="ESL Text" />
          </div>
        </div>
      </nav>

      {/* ✅ Sidebar */}
      {/* <div className="flex mt-16"> */}
      {/* Sidebar - Fixed on Large Screens, Toggles on Mobile */}
      <div
        className={`fixed top-10 lg:left-0 bg-gray-200 shadow-lg transition-all duration-300 w-auto pt-6 h-screen z-20 ${
          isSidebarOpen ? "left-0" : "-left-72"
        } lg:left-0 lg:w-auto`}
      >
        {/* Sidebar Links */}
        <div className="mt-5">
          <NavItems
            icon={<FaHome />}
            text="Home"
            onClick={() => navigate("/admin")}
          />
          <NavItems
            icon={<FaBook />}
            text="Classes"
            onClick={() => navigate("/admin/classes")}
          />
          <NavItems
            icon={<FaChalkboardTeacher />}
            text="Teacher"
            onClick={() => navigate("/admin/teachers")}
          />
          <NavItems
            icon={<FaUserGraduate />}
            text="Student"
            onClick={() => navigate("/admin/students")}
          />
          <NavItems
            icon={<FaSignOutAlt />}
            text="Logout"
            onClick={() => navigate("/logout")}
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default NavbarAdmin;
