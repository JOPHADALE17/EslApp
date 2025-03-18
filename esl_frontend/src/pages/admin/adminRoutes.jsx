import { Routes, Route } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin";
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
          {/* <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/messages" element={<Messages />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default AdminRoutes;
