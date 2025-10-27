// store/employeeStore.js
import { create } from "zustand";

export const useEmployeeStore = create((set) => ({
  employees: [
    { id: 1, name: "Aarav Mehta", department: "Engineering", bookmarked: false },
    { id: 2, name: "Priya Sharma", department: "Marketing", bookmarked: false },
    { id: 3, name: "Rahul Verma", department: "Engineering", bookmarked: false },
    { id: 4, name: "Neha Kapoor", department: "HR", bookmarked: false },
    { id: 5, name: "Vikram Singh", department: "Marketing", bookmarked: false },
    { id: 6, name: "Sana Iqbal", department: "HR", bookmarked: false },
  ],
  toggleBookmark: (id) =>
    set((state) => ({
      employees: state.employees.map((emp) =>
        emp.id === id ? { ...emp, bookmarked: !emp.bookmarked } : emp
      ),
    })),
}));
