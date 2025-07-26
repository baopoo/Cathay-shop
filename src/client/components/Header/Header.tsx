import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b shadow-sm bg-white">
      <div className="flex items-center justify-between px-10 py-4 bg-white mx-[265px]">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-gray-900 mr-1">CATHAY</span>
          <span className="text-gray-500 font-normal">STORE</span>
        </div>

        {/* Menu */}
        <nav className="flex space-x-6 text-sm font-medium text-gray-700">
          <Link to="/" className="text-blue-600">
            Home
          </Link>
          <Link to="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-xl text-gray-700">
          <Badge count={2} size="small" offset={[0, -2]}>
            <ShoppingCartOutlined className="cursor-pointer hover:text-blue-600 text-2xl" />
          </Badge>

          <Badge count={0} size="small" offset={[0, -2]}>
            <HeartOutlined className="cursor-pointer hover:text-blue-600 text-2xl" />
          </Badge>
        </div>
      </div>
    </header>
  );
};

export default Header;
