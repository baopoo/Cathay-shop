import "./App.css";
import "./styles/App.scss";
import { Button, ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: '"Poppins", sans-serif',
        },
      }}
    >
      <span className="container text-3xl text-red-500">Cathay shop</span>
      <Button type="primary">Click me</Button>
    </ConfigProvider>
  );
}

export default App;
