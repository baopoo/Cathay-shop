import { useNavigate } from "react-router-dom";
import { InputNumber } from "antd";

import { useCartStore } from "@/stores";

interface IProps {
  id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  [key: string]: any;
}

const CartItem = ({
  id,
  name,
  slug,
  image,
  price,
  quantity,
  productId,
  variant,
}: IProps) => {
  const navigate = useNavigate();
  const { updateQuantity } = useCartStore();

  const goToDetailProduct = (slug: string, productId: string) => {
    navigate(`/product/${slug}-${productId}`);
  };

  const handleChangeQuantity = (value: number | null) => {
    if (!value) return;
    updateQuantity(id, value);
  };

  return (
    <div className="grid grid-cols-6 text-sm p-4 items-center">
      <div className="col-span-2 flex gap-2 items-center">
        <img src={image} alt={name} className="w-16 h-16 object-cover" />
        <div>
          <div
            className="text-gray-3 cursor-pointer hover:text-blue-500"
            onClick={() => goToDetailProduct(slug, productId)}
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
    </div>
  );
};

export default CartItem;
