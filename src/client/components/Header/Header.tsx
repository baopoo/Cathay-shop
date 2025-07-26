import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { Badge } from "antd";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="border-b-2 shadow-sm bg-white">
      <div className="flex items-center justify-between px-10 py-4 bg-white mx-[265px]">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-gray-900 mr-1">CATHAY</span>
          <span className="text-gray-500 font-normal">STORE</span>
        </div>

        {/* Menu */}
        <Navbar />

        {/* Icons */}
        <div className="flex items-center space-x-5 text-xl text-gray-700">
          <Badge count={2} size="small" offset={[0, -2]}>
            <ShoppingCartOutlined className="cursor-pointer hover:text-blue-600 text-2xl" />
          </Badge>

          <Badge count={2} size="small" offset={[0, -2]}>
            <HeartOutlined className="cursor-pointer hover:text-blue-600 text-2xl" />
          </Badge>
        </div>
      </div>
    </header>
  );
};

export default Header;
