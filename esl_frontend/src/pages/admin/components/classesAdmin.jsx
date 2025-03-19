import { FaPlus } from "react-icons/fa";

function ClassesAdmin() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <div className="flex items-center justify-between gap-2 fixed w-full bg-white top-16 pr-6 pb-3 lg:pr-33">
        {/* Add Classes Button */}
        <button className="bg-blue-600 p-2 sm:p-3 rounded-lg text-white flex items-center justify-center transition hover:bg-blue-700">
          <span className="hidden sm:block text-sm sm:text-base">
            Add Classes
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
              placeholder="Search Mockups, Logos..."
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
        <div className="space-y-4 overflow-y-auto mt-15">
        {Array.from({ length: 8 }, () => (
          <div className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Math 101</h2>
              <p className="text-gray-600 text-sm">Mr. Smith • John doe doe</p>
              <div className="flex gap-2">
                <p className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  M
                </p>
                <p className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  T
                </p>
                <p className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  W
                </p>
                <p className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  TH
                </p>
                <p className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  F
                </p>
                <p className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  S
                </p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              View
            </button>
          </div>
          ))}
        </div>
      {/* </div> */}
      
    </div>
  );
}

export default ClassesAdmin;