// src/components/EmployeeList.jsx
import { useState } from "react";
import { employees } from "../data/employees";

export default function EmployeeList() {
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((emp) =>
    emp.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-4">
        Employee Directory
      </h1>

      {/* Filter Input */}
      <input
        type="text"
        placeholder="Search by starting letters..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* List */}
      <ul className="space-y-2">
        {filteredEmployees.map((name, index) => (
          <li
            key={index}
            className="p-3 bg-blue-50 rounded-xl text-blue-700 font-medium shadow-sm"
          >
            {name}
          </li>
        ))}

        {filteredEmployees.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No results found</p>
        )}
      </ul>
    </div>
  );
}
