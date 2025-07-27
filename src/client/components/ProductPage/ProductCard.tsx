import { EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface IProductProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard = (props: IProductProps) => {
  const { title, price, image } = props;
  const navigate = useNavigate();

  const goToDetail = (slug: string) => {
    navigate(`/product/${slug}`);
  };
  return (
    <div className="group relative rounded overflow-hidden bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div
        className="mt-4 text-sm font-medium text-gray-1 mb-2 hover:text-blue-400 cursor-pointer"
        onClick={() => goToDetail("as12321fa-123gase-123tgh")}
      >
        {title}
      </div>
      <div className="text-gray-2">${price.toFixed(2)}</div>

      {/* Quick View Button (hidden by default) */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <button className="bg-white px-6 py-2 text-sm text-gray-800 rounded-3xl hover:bg-gray-100 shadow-md flex items-center gap-2">
          <EyeOutlined />
          Quick View
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
