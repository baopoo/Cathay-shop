import { Button, Result } from "antd";

const FeaturePending = () => {
  return (
    <Result
      title="Still cooking... come back hungry!"
      extra={
        <Button type="primary" key="console">
          Back Home
        </Button>
      }
    />
  );
};

export default FeaturePending;
