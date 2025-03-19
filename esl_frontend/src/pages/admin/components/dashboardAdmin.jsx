import { FaChalkboardTeacher, FaUserGraduate, FaBook } from "react-icons/fa";

function DashboardCard({ icon, title, count, onClick }) {
  return (
    <div
      className="bg-white shadow-md p-6 rounded-xl flex items-center space-x-6 cursor-pointer hover:shadow-2xl transition-transform transform hover:scale-105 relative z-[-1]"
      onClick={onClick}
    >
      <div className="text-5xl text-blue-500">{icon}</div>
      <div>
        <h2 className="text-lg font-bold text-gray-700">{title}</h2>
        <p className="text-gray-500 text-xl font-semibold">{count}</p>
      </div>
    </div>
  );
}

function ClassTable() {
  return (
    <div className="w-full overflow-auto bg-white shadow-md rounded-xl p-4">
      <table className="min-w-full text-sm text-gray-700">
        <thead className="text-xs uppercase bg-gray-200">
          <tr>
            <th className="px-6 py-3">Product Name</th>
            <th className="px-6 py-3">Color</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-100 transition">
            <td className="px-6 py-4 font-medium">Apple MacBook Pro 17"</td>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function DashboardAdmin() {
  return (
    <div className="p-6 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <DashboardCard
          icon={<FaBook />}
          title="Total Classes"
          count="25"
          onClick={() => (window.location.href = "/admin/classes")}
        />
        <DashboardCard
          icon={<FaChalkboardTeacher />}
          title="Total Teachers"
          count="10"
          onClick={() => (window.location.href = "/admin/teachers")}
        />
        <DashboardCard
          icon={<FaUserGraduate />}
          title="Total Students"
          count="200"
        />
      </div>

      {/* Statistics and Table Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-bold text-gray-700">Statistics</h3>
          <p className="text-gray-500">Overview of key metrics</p>
        </div>
        <div className="md:col-span-2">
          <ClassTable />
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
