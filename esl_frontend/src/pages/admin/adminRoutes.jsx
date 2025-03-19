import { Routes, Route } from "react-router-dom";
import NavbarAdmin from "./navbarAdmin";
import TeacherAdmin from "./components/teacherAdmin";
import ClassesAdmin from "./components/classesAdmin";
import StudentAdmin from "./components/studentAdmin";
import DashboardAdmin from "./components/dashboardAdmin";

function AdminRoutes() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <NavbarAdmin />

      {/* Content Area */}
      <div className="flex-1 p-3 mt-15">
        <Routes>
          <Route path="/" element={<DashboardAdmin />} />
          <Route path="/classes" element={<ClassesAdmin />} />
          <Route path="/teachers" element={<TeacherAdmin />} />
          <Route path="/students" element={<StudentAdmin />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminRoutes;
