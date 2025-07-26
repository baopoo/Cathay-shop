import { useLayoutContext } from "@/admin/contexts";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";

const { Header: AHeader } = Layout;

const Header = () => {
  const { open, setOpen } = useLayoutContext();
  return (
    <AHeader>
      <Button
        type="text"
        icon={open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setOpen(!open)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </AHeader>
  );
};

export default Header;
