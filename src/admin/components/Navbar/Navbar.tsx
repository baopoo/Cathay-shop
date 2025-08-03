import { useLayoutContext } from "@/admin/contexts";
import {
  ProfileOutlined,
  AppstoreOutlined,
  ShoppingOutlined,
  BranchesOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const Navbar = () => {
  const { open } = useLayoutContext();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={open}
      width={200}
      style={{
        background: "white",
        boxShadow: "0 1px 5px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className="h-16 mb-5 py-2 flex items-center">
        <img src="/logo.png" alt="" className="w-full object-cover" />
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        items={[
          {
            key: "/admin/category",
            icon: <AppstoreOutlined />,
            label: "Categories",
            onClick: () => navigate("/admin/category"),
          },
          {
            key: "/admin/product",
            icon: <ShoppingOutlined />,
            label: "Products",
            onClick: () => navigate("/admin/product"),
          },
          {
            key: "/admin/variant",
            icon: <BranchesOutlined />,
            label: "Variant",
            onClick: () => navigate("/admin/variant"),
          },
          {
            key: "/admin/order",
            icon: <ProfileOutlined />,
            label: "Orders",
            onClick: () => navigate("/admin/order"),
          },
        ]}
      />
    </Sider>
  );
};

export default Navbar;
