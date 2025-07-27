interface IProductProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard = (props: IProductProps) => {
  const { title, price, image } = props;

  return (
    <div className="group relative overflow-hidden">
      <img src={image} alt={title} className="w-full h-auto object-cover" />
      <div className="mt-2 text-sm font-medium text-gray-1 my-2 hover:text-blue-400 cursor-pointer">
        {title}
      </div>
      <div className="text-gray-2">${price.toFixed(2)}</div>
    </div>
  );
};

export default ProductCard;
