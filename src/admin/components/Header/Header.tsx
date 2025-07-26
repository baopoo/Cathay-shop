import { useLayoutContext } from "@/admin/contexts";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";
import HeaderInfo from "./HeaderInfo";

const { Header: AHeader } = Layout;

const Header = () => {
  const { open, setOpen } = useLayoutContext();
  return (
    <AHeader
      style={{
        padding: 0,
        background: "white",
        boxShadow: "1px 0 5px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className="flex items-center justify-between pr-5">
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
        <HeaderInfo />
      </div>
    </AHeader>
  );
};

export default Header;
