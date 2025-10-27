'use client';
import { useState } from 'react';

const TABS = ['Overview', 'Projects', 'Feedback'];

export default function Tabs({ user }) {
  const [active, setActive] = useState('Overview');

  const getContent = () => {
    switch (active) {
      case 'Overview':
        return (
          <p className="mt-2">
            {user.firstName} has been a consistent performer in the {user.department} department.
          </p>
        );
      case 'Projects':
        return (
          <ul className="list-disc pl-6 mt-2">
            <li>Project A - {user.department} Optimization</li>
            <li>Project B - Team Collaboration Tool</li>
          </ul>
        );
      case 'Feedback':
        return (
          <form className="flex flex-col gap-2 mt-2">
            <textarea
              className="p-2 rounded border dark:bg-gray-700 dark:text-white"
              rows="4"
              placeholder="Write your feedback..."
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-4">
      <div className="flex gap-2 border-b pb-2">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-t ${
              active === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'
            }`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">{getContent()}</div>
    </div>
  );
}
