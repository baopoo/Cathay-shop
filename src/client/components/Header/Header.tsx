import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge, Drawer } from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import { useCartStore } from "@/stores";
import { CART_STORAGE_KEY } from "@/constants";

import Navbar from "./Navbar";

const Header = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const { cart, setCart } = useCartStore();

  useEffect(() => {
    const cartData = localStorage.getItem(CART_STORAGE_KEY);
    if (cartData) {
      try {
        const parsed = JSON.parse(cartData);
        if (Array.isArray(parsed)) {
          setCart(parsed);
        }
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e);
      }
    }
  }, []);

  const goToCart = () => {
    navigate("/shopping-cart");
  };

  return (
    <header className="border-b-2 shadow-sm bg-white">
      <div className="flex items-center justify-between px-4 md:px-10 py-4 container mx-auto">
        <div
          className="text-xl md:text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-gray-900 mr-1">CATHAY</span>
          <span className="text-gray-500 font-normal">STORE</span>
        </div>

        <div className="hidden sm:block">
          <Navbar />
        </div>

        <div className="flex items-center space-x-4 md:space-x-5 text-xl text-gray-700">
          <Badge count={cart.length} size="small" offset={[0, -2]}>
            <ShoppingCartOutlined
              className="cursor-pointer hover:text-blue-600 text-2xl"
              onClick={goToCart}
            />
          </Badge>

          <Badge count={2} size="small" offset={[0, -2]}>
            <HeartOutlined className="cursor-pointer hover:text-blue-600 text-2xl" />
          </Badge>

          <div className="sm:hidden">
            <MenuOutlined
              className="text-2xl cursor-pointer"
              onClick={() => setOpenDrawer(true)}
            />
          </div>
        </div>
      </div>

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
