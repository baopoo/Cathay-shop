import { useNavigate } from "react-router-dom";
import { InputNumber, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { useCartStore } from "@/stores";

interface IProps {
  id: string; // variant id
}

const CartItem = ({ id }: IProps) => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart } = useCartStore();

  const item = cart.find((i) => i.id === id);
  if (!item) return null;

  const { name, slug, image, price, quantity, productId, variant } = item;

  const goToDetailProduct = () => {
    navigate(`/product/${slug}-${productId}`);
  };

  const handleChangeQuantity = (value: number | null) => {
    if (!value) return;
    updateQuantity(id, value);
  };

  const handleRemoveItem = () => {
    console.log("check");
    removeFromCart(id);
  };

  return (
    <div className="grid grid-cols-7 text-sm p-4 items-center">
      <div className="col-span-2 flex gap-2 items-center">
        <img src={image} alt={name} className="w-16 h-16 object-cover" />
        <div>
          <div
            className="text-gray-3 cursor-pointer hover:text-blue-500"
            onClick={goToDetailProduct}
          >
            {name}
          </div>
          <div className="text-gray-500">${price.toFixed(2)}</div>
        </div>
      </div>
      <div className="col-span-2 flex gap-2 items-center">
        Size: {variant.size} - Color: {variant.color}
      </div>
      <InputNumber min={1} value={quantity} onChange={handleChangeQuantity} />
      <div className="text-gray-3">${(price * quantity).toFixed(2)}</div>
      <div className="flex justify-center cursor-pointer hover:text-blue-500">
        <Popconfirm
          title="Are you sure you want to remove this item from your cart?"
          okText="Yes"
          cancelText="No"
          onConfirm={handleRemoveItem}
        >
          <div className="flex justify-center cursor-pointer hover:text-red-500">
            <DeleteOutlined />
          </div>
        </Popconfirm>
      </div>
    </div>
  );
};

export default CartItem;
