import { Layout } from "antd";
import { LayoutProvider } from "../contexts";
import { Header, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const AdminLayout = () => {
  return (
    <LayoutProvider>
      <Layout>
        <Navbar />
        <Layout>
          <Header />
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </LayoutProvider>
  );
};

export default AdminLayout;
