import { Col, Row } from "antd";

import { ProductImage, ProductInfo, ProductTabs } from "@/client/components";

const ProductDetail = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <div className="text-[12px] text-gray-3 mb-6">
            Home &gt; <span className="text-gray-3">Men &gt; </span>
            <span className="text-gray-1 font-medium">Lightweight Jacket</span>
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
  );
};

export default ProductDetail;
