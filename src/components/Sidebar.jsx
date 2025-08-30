// src/components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import logoImage from "../assets/logo-image.png";

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/converter", label: "Converter" },
    { path: "/send", label: "Send" },
    { path: "/chart", label: "Chart" },
    { path: "/setting", label: "Setting" },
  ];

  return (
    <aside className="w-48 bg-green text-white shadow-md p-4 flex flex-col gap-6">
      <h2 className="text-xl font-bold text-green-700">
        <img
          src={logoImage}
          alt="Logo"
          className="h-10 sm:h-24 md:h-20 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </h2>

      <nav className="flex flex-col gap-3 text-gray-700 font-medium">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-3 py-2 rounded-md ${
              location.pathname === item.path
                ? "bg-green-600 text-white"
                : "hover:bg-green-100"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
