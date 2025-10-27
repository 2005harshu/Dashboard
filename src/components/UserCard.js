'use client';
import { useBookmarks } from '@/hooks/useBookmarks';

export default function UserCard({ user }) {
  const { addBookmark } = useBookmarks();

  return (
    <div className="bg-white shadow rounded p-4 dark:bg-gray-800">
      <h2 className="text-lg font-semibold">{user.firstName} {user.lastName}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Department: {user.department}</p>
      <div>⭐ {user.rating}</div>
      <div className="mt-2 flex gap-2">
        <a href={`/employee/${user.id}`} className="btn">View</a>
        <button className="btn" onClick={() => addBookmark(user)}>Bookmark</button>
        <button className="btn">Promote</button>
      </div>
    </div>
  );
}
