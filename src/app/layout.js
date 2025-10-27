import './globals.css';
import { BookmarkProvider } from '@/context/BookmarkContext';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'HR Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <BookmarkProvider>
          <Navbar />
          {children}
        </BookmarkProvider>
      </body>
    </html>
  );
}
