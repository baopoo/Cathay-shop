import { useEffect } from "react";
import { Col, Image, Row, Spin } from "antd";
import { useParams } from "react-router-dom";

import { ProductImage, ProductInfo } from "@/client/components";
import { getLastSegment } from "@/client/utils";
import { useProduct } from "@/client/hooks";
import { useProductStore } from "@/stores";

import menSize from "@/client/assets/men-size.webp";

const ProductDetail = () => {
  const { slug } = useParams();
  const { getProductDetail } = useProduct();
  const { productSelected, loading } = useProductStore();

  useEffect(() => {
    const productId = getLastSegment(slug as string);
    getProductDetail(productId);
  }, [slug]);

  return (
    <Spin spinning={loading}>
      <div className="container mx-auto px-4 py-8">
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <div className="text-[12px] text-gray-3 mb-6">
              Home &gt; <span className="text-gray-3">Men &gt; </span>
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

            <Image
              className="mt-2"
              width={"100%"}
              src={menSize}
              alt="Size for men"
            />
          </Col>
        </Row>
      </div>
    </Spin>
  );
};

export default ProductDetail;
