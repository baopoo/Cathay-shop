import { Layout } from "antd";
import { LayoutProvider } from "../contexts";
import { Header, Navbar } from "../components";
import { Outlet } from "react-router-dom";
import "../styles/app.scss";

const { Content } = Layout;

const AdminLayout = () => {
  return (
    <LayoutProvider>
      <Layout style={{ background: "#fff" }}>
        <Navbar />
        <Layout>
          <Header />
          <Content>
            <div className="main-content overflow-y-auto">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </LayoutProvider>
  );
};

export default AdminLayout;
