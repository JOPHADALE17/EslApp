import { FaPlus, FaEnvelope, FaTrash, FaEye } from "react-icons/fa";
import testimg from "../../../assets/background.png";

function TeacherAdmin() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <div className="flex items-center justify-between gap-2 fixed w-full bg-white top-16 pr-6 pb-3 lg:pr-33">
        {/* Add Classes Button */}
        <button className="bg-blue-600 p-2 sm:p-3 rounded-lg text-white flex items-center justify-center transition hover:bg-blue-700">
          <span className="hidden sm:block text-sm sm:text-base">
            Add Teacher
          </span>
          <FaPlus className="sm:hidden text-lg" />
        </button>

        {/* Search Form */}
        <form className="w-full sm:w-2/3 md:w-1/2">
          <div className="relative">
            {/* Search Icon */}
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 text-gray-500 pointer-events-none">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            {/* Search Input */}
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search teacher"
              required
            />

            {/* Search Button */}
            <button
              type="submit"
              className="absolute end-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* <div className="h-3/4"> */}
      <div className="space-y-4 overflow-y-auto mt-15 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {Array.from({ length: 8 }, () => (
          <div className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center ">
            <div className="flex">
              <img src={testimg} alt="" className="w-12 h-12 rounded-lg" />
              <h2 className="text-lg font-semibold mt-2 ml-2">Jophadale Carl Velasco</h2>
            </div>
            <div className="flex gap-1">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              <FaEye/>
            </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
              <FaEnvelope/>
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
              <FaTrash/>
            </button>
            </div>
            
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

export default TeacherAdmin;
