"use client";
import { useState } from "react";
import { useEmployeeStore } from "@/store/employeeStore";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDept, setFilterDept] = useState("All");
  const employees = useEmployeeStore((state) => state.employees);
  const toggleBookmark = useEmployeeStore((state) => state.toggleBookmark);

  const filteredEmployees = employees.filter((emp) => {
    const nameMatch = emp.name.toLowerCase().includes(searchQuery.toLowerCase());
    const deptMatch = filterDept === "All" || emp.department === filterDept;
    return nameMatch && deptMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white p-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/3 p-2 rounded-xl text-black"
        />
        <select
          value={filterDept}
          onChange={(e) => setFilterDept(e.target.value)}
          className="w-full md:w-1/4 p-2 rounded-xl text-black"
        >
          <option value="All">All Departments</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
          <option value="HR">HR</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((emp) => (
            <div
              key={emp.id}
              className="bg-blue-900 text-white p-5 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105"
            >
              <h2 className="text-xl font-semibold">{emp.name}</h2>
              <p className="text-blue-200 mb-2">{emp.department}</p>
              <button
                onClick={() => toggleBookmark(emp.id)}
                className={`px-4 py-1 rounded-xl text-sm font-medium ${
                  emp.bookmarked
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-green-500 hover:bg-green-600"
                } transition`}
              >
                {emp.bookmarked ? "Remove Bookmark" : "Bookmark"}
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No employees found.</p>
        )}
      </div>
    </div>
  );
}
