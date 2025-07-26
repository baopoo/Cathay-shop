import "./App.css";
import "./styles/App.scss";
import { ConfigProvider } from "antd";
import AppRoutes from "./routes";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: '"Poppins", sans-serif',
        },
      }}
    >
      <AppRoutes />
    </ConfigProvider>
  );
}

export default App;
