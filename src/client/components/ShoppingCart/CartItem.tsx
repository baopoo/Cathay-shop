import { InputNumber } from "antd";

interface IProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
  onChangeQuantity: (value: number | null) => void;
}

const CartItem = ({
  image,
  name,
  price,
  quantity,
  onChangeQuantity,
}: IProps) => {
  return (
    <div className="grid grid-cols-4 text-sm p-4 items-center">
      <div className="col-span-2 flex gap-2 items-center">
        <img src={image} alt={name} className="w-16 h-16 object-cover" />
        <div>
          <div className="text-gray-3">{name}</div>
          <div className="text-gray-500">${price.toFixed(2)}</div>
        </div>
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
