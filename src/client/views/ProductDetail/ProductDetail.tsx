import { Col, Row } from "antd";

import { ProductImage, ProductInfo, ProductTabs } from "@/client/components";

const ProductDetail = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Row gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <ProductImage />
        </Col>
        <Col xs={24} md={12}>
          <ProductInfo />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
