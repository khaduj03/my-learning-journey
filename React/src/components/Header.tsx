import { Link, useLocation } from "react-router-dom";
import { navItems } from "../lib/header";

export default function Header() {
  const location = useLocation();

  return (
    <header
      className="sticky top-0 z-50 bg-primary  border-gray-700 shadow-lg"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div>
            <h1 className="text-lg font-semibold text-white">
              Khaduj React Journey
            </h1>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4 text-sm">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`btn btn-ghost btn-sm transition-colors duration-300 ${
                  isActive
                    ? "text-primary bg-primary-content"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
