import { FaChalkboardTeacher, FaUserGraduate, FaBook } from "react-icons/fa";

function DashboardCard({ icon, title, count, onClick }) {
  return (
    <div
      className="bg-white shadow-lg p-4 rounded-lg flex items-center space-x-4 cursor-pointer hover:shadow-xl transition"
      onClick={onClick}
    >
      <div className="text-4xl text-blue-600">{icon}</div>
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-500">{count}</p>
      </div>
    </div>
  );
}


function ClassTable() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {/* Outer container keeps carousel size fixed */}
      <div className="w-full h-full overflow-hidden">
        {/* Enable horizontal scrolling here */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-[700px] w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function TeacherSlide() {
  return <h1>hellowworld</h1>;
}

function StudentSlide() {
  return <h1>goodby wworld</h1>;
}

function DashboardAdmin() {
  return (
    <div className="pr-6 flex flex-col w-screen gap-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          onClick={() => (window.location.href = "/admin/students")}
        />
      </div>

      <div className="flex flex-col gap-4">

      <div class="grid grid-cols-2 gap-4">
         <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div>
      <div class="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
         <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
         </p>
      </div>
      </div>

    </div>
  );
}

export default DashboardAdmin;
