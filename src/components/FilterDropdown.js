const departments = ['HR', 'Sales', 'Engineering', 'Marketing'];
const ratings = ['1', '2', '3', '4', '5'];

export default function FilterDropdown({ filters, setFilters }) {
  const toggleDept = dept => {
    setFilters(prev => ({
      ...prev,
      departments: prev.departments.includes(dept)
        ? prev.departments.filter(d => d !== dept)
        : [...prev.departments, dept],
    }));
  };

  const toggleRating = rate => {
    setFilters(prev => ({
      ...prev,
      ratings: prev.ratings.includes(rate)
        ? prev.ratings.filter(r => r !== rate)
        : [...prev.ratings, rate],
    }));
  };

  return (
    <div className="flex gap-4 flex-wrap">
      <div>
        <p className="font-semibold mb-1">Departments:</p>
        <div className="flex gap-2 flex-wrap">
          {departments.map(dept => (
            <button
              key={dept}
              className={`px-2 py-1 rounded border text-sm ${
                filters.departments.includes(dept)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-800'
              }`}
              onClick={() => toggleDept(dept)}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold mb-1">Ratings:</p>
        <div className="flex gap-2 flex-wrap">
          {ratings.map(rate => (
            <button
              key={rate}
              className={`px-2 py-1 rounded border text-sm ${
                filters.ratings.includes(rate)
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-800'
              }`}
              onClick={() => toggleRating(rate)}
            >
              ⭐ {rate}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
