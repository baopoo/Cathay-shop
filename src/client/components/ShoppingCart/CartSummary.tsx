import { Input, Button, Form, message, notification } from "antd";
import { useCartStore, useOrderStore } from "@/stores";
import { useOrder, useCart } from "@/client/hooks";

interface IProps {
  discount: number;
}

const CartSummary = ({ discount }: IProps) => {
  const { getTotal } = useCartStore();
  const subTotal = getTotal();
  const total = (subTotal - discount).toFixed(2);
  const { handleCheckout } = useOrder();
  const { handleClearCart } = useCart();
  const { loading } = useOrderStore();

  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then(async (values) => {
      try {
        const cartItems = useCartStore.getState().cart;

        if (cartItems.length === 0) {
          message.warning("Your cart is empty.");
          return;
        }

        await handleCheckout({
          items: cartItems,
          total: Number(total),
          status: "pending",
          name: values.fullName,
          phone: values.phone,
          address: values.address,
          email: values.email || "",
        });

        notification.success({
          message:
            "Your order has been created. Our staff will call you shortly to confirm it one more time. Please keep your phone available !",
        });

        form.resetFields();
        handleClearCart();
      } catch (error) {
        console.error(error);
        message.error("Failed to create order. Please try again.");
      }
    });
  };

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

        <Form layout="vertical" form={form}>
          <Form.Item
            name="fullName"
            rules={[{ required: true, message: "Full Name is required" }]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Phone is required" },
              {
                pattern: /^[0-9]+$/,
                message: "Phone must be a valid number",
              },
            ]}
          >
            <Input placeholder="Phone" />
          </Form.Item>

          <Form.Item
            name="address"
            rules={[{ required: true, message: "Detail Address is required" }]}
          >
            <Input placeholder="Detail Address" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input placeholder="Email (optional)" />
          </Form.Item>
        </Form>
      </div>

      <div className="flex justify-between mb-2">
        <span>Coupon Discount:</span>
        <span>${discount}</span>
      </div>

      <div className="flex justify-between font-semibold text-base mb-4">
        <span>Total:</span>
        <span>${total}</span>
      </div>

      <Button
        type="primary"
        block
        className="bg-black hover:bg-gray-800"
        loading={loading}
        onClick={handleSubmit}
      >
        Checkout
      </Button>
    </div>
  );
};

export default CartSummary;
