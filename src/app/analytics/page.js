"use client";
import { useEmployeeStore } from "@/store/employeeStore";

export default function AnalyticsPage() {
  const employees = useEmployeeStore((state) => state.employees);

  const total = employees.length;
  const bookmarked = employees.filter((e) => e.bookmarked).length;

  const departmentCounts = employees.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">📊 Employee Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-900 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold">👥 Total Employees</h2>
          <p className="text-3xl mt-2">{total}</p>
        </div>
        <div className="bg-blue-900 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold">📌 Bookmarked Employees</h2>
          <p className="text-3xl mt-2">{bookmarked}</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">🛠️ Department Breakdown</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.entries(departmentCounts).map(([dept, count]) => (
          <div
            key={dept}
            className="bg-blue-900 p-5 rounded-2xl shadow-md text-center"
          >
            <h3 className="text-xl font-medium">{dept}</h3>
            <p className="text-2xl mt-1">{count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
