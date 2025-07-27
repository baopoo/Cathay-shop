import { Button } from "antd";

interface IProps {
  onClick: () => void;
  loading: boolean;
}

const LoadMoreButton = ({ onClick, loading = false }: IProps) => {
  return (
    <div className="flex justify-center my-12">
      <Button
        type="default"
        size="large"
        loading={loading}
        onClick={onClick}
        className="!rounded-full !px-8 !bg-neutral-200 hover:!bg-black text-black hover:!text-white hover:!border-none"
      >
        LOAD MORE
      </Button>
    </div>
  );
};

export default LoadMoreButton;
