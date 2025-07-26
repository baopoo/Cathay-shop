import { NavLink } from "react-router-dom";

import { navItems } from "@/client/constants";

const Navbar = () => {
  return (
    <nav className="flex space-x-6 text-sm font-medium text-gray-700">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-800"
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
