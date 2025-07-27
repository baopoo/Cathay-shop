import { categoriesTab } from "@/client/constants";
import {
  FacebookOutlined,
  HeartOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button, notification } from "antd";

const Footer = () => {
  const onSubscribe = () => {
    notification.info({
      message: "This feature is currently under development !",
    });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-100 px-6 py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10">
        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold mb-4">CATEGORIES</h4>
          <ul className="space-y-2 text-neutral-400">
            {categoriesTab.map((item) => (
              <li key={item.id} className="hover:text-blue-400 cursor-pointer">
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">GET IN TOUCH</h4>
          <p className="text-neutral-400 text-sm mb-4">
            Any questions? Let call me on (+84) 858 32071
          </p>
          <div className="flex gap-4 text-xl text-neutral-400">
            <FacebookOutlined className="hover:text-white cursor-pointer" />
            <InstagramOutlined className="hover:text-white cursor-pointer" />
            <TwitterOutlined className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">NEWSLETTER</h4>
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full bg-transparent border-b border-neutral-700 pb-2 mb-4 text-neutral-300 placeholder:text-neutral-500 focus:outline-none"
          />
          <Button
            className="w-full px-6 py-2 bg-indigo-600 hover:!bg-indigo-700 transition rounded text-white hover:!text-white border-none"
            onClick={onSubscribe}
          >
            SUBSCRIBE
          </Button>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 text-center text-neutral-500 text-xs">
        <p>
          From Cathay with love <HeartOutlined />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
