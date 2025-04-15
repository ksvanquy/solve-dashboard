// src/components/Navbar.tsx
const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <h1 className="text-lg font-semibold">Admin Dashboard</h1>
      </div>
    </div>
  );
};

export default Navbar;