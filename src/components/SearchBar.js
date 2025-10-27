export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by name, email, or department"
      className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
