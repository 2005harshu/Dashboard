"use client";
import { useEmployeeStore } from "@/store/employeeStore";

export default function BookmarkPage() {
  const employees = useEmployeeStore((state) => state.employees);
  const toggleBookmark = useEmployeeStore((state) => state.toggleBookmark);

  const bookmarkedEmployees = employees.filter((emp) => emp.bookmarked);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Bookmarked Employees</h1>

      {bookmarkedEmployees.length === 0 ? (
        <p>No employees bookmarked.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bookmarkedEmployees.map((emp) => (
            <div
              key={emp.id}
              className="bg-blue-900 text-white p-5 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105"
            >
              <h2 className="text-xl font-semibold">{emp.name}</h2>
              <p className="text-blue-200 mb-2">{emp.department}</p>
              <button
                onClick={() => toggleBookmark(emp.id)}
                className="px-4 py-1 rounded-xl bg-red-500 hover:bg-red-600 text-sm font-medium"
              >
                Remove Bookmark
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
