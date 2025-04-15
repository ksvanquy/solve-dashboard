// src/components/Sidebar.tsx
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4">
      <ul className="space-y-4">
        <li>
          <Link href="/dashboard" className="text-blue-600 hover:underline">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/users" className="text-blue-600 hover:underline">
            Users
          </Link>
        </li>
        <li>
          <Link href="/grades" className="text-blue-600 hover:underline">
            Grades
          </Link>
        </li>
        <li>
          <Link href="/curriculum" className="text-blue-600 hover:underline">
            Curriculum
          </Link>
        </li>
        {/* Add other links here */}
      </ul>
    </div>
  );
};

export default Sidebar;