import React from "react";

const Userinput = () => {
  return (
    <section>
      <form  className="max-w-3xl mx-auto p-6 py-14 rounded-md shadow-md">
        {/* First Row */}
        <div className="flex flex-row gap-6 mb-6 justify-center">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="mb-1 font-medium">Initial Investment:</label>
            <input
              type="number"
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="mb-1 font-medium">Annual Investment:</label>
            <input
              type="number"
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-row gap-6 py-10 justify-center">
          <div className="flex flex-col w-full">
            <label className="mb-1 font-medium">Expected Return:</label>
            <input
              type="number"
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col w-full ">
            <label className="mb-1 font-medium">Duration:</label>
            <input
              type="number"
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Userinput;
