import { useLayoutContext } from "@/admin/contexts";
import {
  ProfileOutlined,
  AppstoreOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const Navbar = () => {
  const { open } = useLayoutContext();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={open}
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
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <AppstoreOutlined />,
            label: "Categories",
          },
          {
            key: "2",
            icon: <ShoppingOutlined />,
            label: "Products",
          },
          {
            key: "3",
            icon: <ProfileOutlined />,
            label: "Orders",
          },
        ]}
      />
    </Sider>
  );
};

export default Navbar;
