import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded shadow-sm">
      <ShoppingCartOutlined className="text-5xl text-gray-400 mb-4" />
      <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
      <p className="text-gray-500 mb-6">
        Looks like you haven’t added anything to your cart yet.
      </p>
      <Button
        type="primary"
        size="large"
        className="rounded-3xl px-8 py-2"
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </Button>
    </div>
  );
};

export default EmptyCart;
