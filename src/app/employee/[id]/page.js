'use client';
import { useParams } from 'next/navigation';

const employeeDetails = {
  1: { name: 'Aman Kumar', department: 'Engineering', email: 'aman@example.com' },
  2: { name: 'Priya Sharma', department: 'Marketing', email: 'priya@example.com' },
  3: { name: 'Ravi Verma', department: 'Finance', email: 'ravi@example.com' },
};

export default function EmployeeProfile() {
  const { id } = useParams();
  const emp = employeeDetails[id];

  if (!emp) return <div>Employee not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{emp.name}</h1>
      <p><strong>Department:</strong> {emp.department}</p>
      <p><strong>Email:</strong> {emp.email}</p>
    </div>
  );
}
