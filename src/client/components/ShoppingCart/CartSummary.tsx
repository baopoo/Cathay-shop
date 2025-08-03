import { Input, Button } from "antd";
import { useCartStore } from "@/stores";

interface IProps {
  discount: number;
}

const CartSummary = ({ discount }: IProps) => {
  const { getTotal } = useCartStore();
  const subTotal = getTotal();
  const total = (subTotal - discount).toFixed(2);

  return (
    <div className="border rounded p-6 w-full md:w-1/3 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>${subTotal.toFixed(2)}</span>
      </div>
      <div className="text-sm text-gray-500 mb-4">
        There are no shipping methods available. Please double check your
        address, or contact us if you need any help.
      </div>
      <div className="mb-4">
        <div className="text-sm font-medium mb-2">Information Guest</div>
        <Input placeholder="Full Name" className="mb-2" />
        <Input placeholder="Phone" className="mb-2" />
        <Input placeholder="Detail Address" className="mb-2" />
        <Input placeholder="Email (optional)" className="mb-2" />
      </div>
      <div className="flex justify-between mb-2">
        <span>Coupon Discount:</span>
        <span>${discount}</span>
      </div>
      <div className="flex justify-between font-semibold text-base mb-4">
        <span>Total:</span>
        <span>${total}</span>
      </div>
      <Button type="primary" block className="bg-black hover:bg-gray-800">
        Checkout
      </Button>
    </div>
  );
};

export default CartSummary;
