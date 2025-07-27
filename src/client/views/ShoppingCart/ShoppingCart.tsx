import { CartItem, CartSummary } from "@/client/components";
import { Button, Input } from "antd";

const ShoppingCart = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="text-[12px] text-gray-3 mb-6">
        Home &gt; <span className="text-gray-1 font-medium">Shopping Cart</span>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-white border rounded shadow-sm">
            <div className="grid grid-cols-4 font-semibold text-sm p-4 border-b">
              <div className="col-span-2">Product</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>
            <div className="p-4">
              <CartItem
                image="https://themewagon.github.io/cozastore/images/product-01.jpg"
                name="Fresh Strawberries"
                price={36.0}
                quantity={2}
                onChangeQuantity={(value) => {
                  console.log(value);
                }}
              />
              <CartItem
                image="https://themewagon.github.io/cozastore/images/product-02.jpg"
                name="Lightweight Jacket"
                price={16.0}
                quantity={2}
                onChangeQuantity={() => {}}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 gap-4 flex-wrap">
            <div className="flex gap-4">
              <Input
                placeholder="Coupon Code"
                className="w-full sm:w-auto rounded-3xl"
              />
              <Button className="rounded-3xl px-6 py-4">Apply Coupon</Button>
            </div>
            <div className="flex gap-2">
              <Button type="primary" className="rounded-3xl px-6 py-4">
                Back to Shop
              </Button>
            </div>
          </div>
        </div>
        <CartSummary />
      </div>
    </div>
  );
};

export default ShoppingCart;
