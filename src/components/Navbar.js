// app/components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-10 py-6 border-b border-gray-700 text-blue-400 bg-gray-900">
      <Link href="/" className="hover:text-white transition">
        Home
      </Link>
      <Link href="/bookmarks" className="hover:text-white transition">
        Bookmarks
      </Link>
      <Link href="/analytics" className="hover:text-white transition">
        Analytics
      </Link>
    </nav>
  );
}
