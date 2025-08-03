import { InputNumber } from "antd";

interface IProps {
  id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  [key: string]: any;
  onChangeQuantity: (value: number | null) => void;
}

const CartItem = ({
  id,
  name,
  slug,
  image,
  price,
  quantity,
  variant,
  onChangeQuantity,
}: IProps) => {
  return (
    <div className="grid grid-cols-6 text-sm p-4 items-center">
      <div className="col-span-2 flex gap-2 items-center">
        <img src={image} alt={name} className="w-16 h-16 object-cover" />
        <div>
          <div className="text-gray-3 cursor-pointer hover:text-blue-500">
            {name}
          </div>
          <div className="text-gray-500">${price.toFixed(2)}</div>
        </div>
      </div>
      <div className="col-span-2 flex gap-2 items-center">
        Size: {variant.size} - Color: {variant.color}
      </div>
      <InputNumber
        min={1}
        value={quantity}
        onChange={(event) => onChangeQuantity(event)}
      />
      <div className="text-gray-3">${(price * quantity).toFixed(2)}</div>
    </div>
  );
};

export default CartItem;
