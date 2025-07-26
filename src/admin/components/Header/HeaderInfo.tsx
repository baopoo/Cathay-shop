import { LogoutOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";

const HeaderInfo = () => {
  return (
    <div className="flex items-center" style={{ gap: "8px" }}>
      <Avatar src="https://images.unsplash.com/photo-1753118202506-259f86ed3e40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" />
      <div>Cathay Danh</div>
      <Tooltip title="Sign out" placement="bottomRight">
        <LogoutOutlined className="cursor-pointer hover:text-blue-600" />
      </Tooltip>
    </div>
  );
};

export default HeaderInfo;
