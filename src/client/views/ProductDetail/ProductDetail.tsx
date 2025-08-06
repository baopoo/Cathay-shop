import { useEffect } from "react";
import { Col, Row, Skeleton } from "antd";
import { useParams, useNavigate } from "react-router-dom";

import { ProductImage, ProductInfo } from "@/client/components";
import { getLastSegment } from "@/client/utils";
import { useProduct, useVariant } from "@/client/hooks";
import { useProductStore } from "@/stores";

const ProductDetail = () => {
  const { slug } = useParams();
  const { getProductDetail } = useProduct();
  const { getVariantsByProductId } = useVariant();
  const { productSelected, loading } = useProductStore();
  const navigate = useNavigate();

  useEffect(() => {
    const productId = getLastSegment(slug as string);
    getProductDetail(productId);
    getVariantsByProductId(productId);
  }, [slug]);

  const goToPage = (url: string) => {
    navigate(url);
  };

  return (
    <Skeleton loading={loading} active>
      <div className="container mx-auto px-4 py-8">
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <div className="text-[12px] text-gray-3 mb-6">
              <span className="cursor-pointer" onClick={() => goToPage("/")}>
                Home
              </span>{" "}
              &gt;{" "}
              <span
                className="text-gray-3 cursor-pointer"
                onClick={() => goToPage("/")}
              >
                Men &gt;{" "}
              </span>
              <span className="text-gray-1 font-medium">
                {productSelected.name}
              </span>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <ProductImage />
          </Col>
          <Col xs={24} md={12}>
            <ProductInfo />
          </Col>
        </Row>
      </div>
    </Skeleton>
  );
};

export default ProductDetail;
