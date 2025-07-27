import { useState } from "react";
import { Badge, Drawer } from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import Navbar from "./Navbar";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <header className="border-b-2 shadow-sm bg-white">
      <div className="flex items-center justify-between px-4 md:px-10 py-4 container mx-auto">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold">
          <span className="text-gray-900 mr-1">CATHAY</span>
          <span className="text-gray-500 font-normal">STORE</span>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden sm:block">
          <Navbar />
        </div>

        {/* Icons + Mobile Menu */}
        <div className="flex items-center space-x-4 md:space-x-5 text-xl text-gray-700">
          <Badge count={2} size="small" offset={[0, -2]}>
            <ShoppingCartOutlined className="cursor-pointer hover:text-blue-600 text-2xl" />
          </Badge>

          <Badge count={2} size="small" offset={[0, -2]}>
            <HeartOutlined className="cursor-pointer hover:text-blue-600 text-2xl" />
          </Badge>

          {/* Mobile menu toggle */}
          <div className="sm:hidden">
            <MenuOutlined
              className="text-2xl cursor-pointer"
              onClick={() => setOpenDrawer(true)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navbar Drawer */}
      <Drawer
        className="sm:hidden"
        placement="left"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        closeIcon={<CloseOutlined />}
        title="Menu"
      >
        <Navbar />
      </Drawer>
    </header>
  );
};

export default Header;
