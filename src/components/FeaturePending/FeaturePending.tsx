import { Button, Result } from "antd";

const FeaturePending = ({ hasBackHome = true }: { hasBackHome: boolean }) => {
  return (
    <Result
      title="Still cooking... come back hungry!"
      extra={
        hasBackHome && (
          <Button type="primary" key="console">
            Back Home
          </Button>
        )
      }
    />
  );
};

export default FeaturePending;
