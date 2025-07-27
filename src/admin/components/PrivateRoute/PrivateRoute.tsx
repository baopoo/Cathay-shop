import { useAuth } from "@/admin/hooks";
import { Spin } from "antd";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  element: JSX.Element;
}

const PrivateRoute = ({ element }: IProps) => {
  const { isAuthChecked, isAuthenticated, checkInfoUser } = useAuth();
  const location = useLocation();

  useEffect(() => {
    checkInfoUser();
  }, []);

  const redirectUrl =
    location.pathname === "/auth/logout"
      ? "/"
      : `/admin/log-in?from=${encodeURIComponent(
          location.pathname + location.search
        )}`;

  if (!isAuthChecked)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Spin size="large" />
      </div>
    );

  return isAuthenticated ? element : <Navigate to={redirectUrl} replace />;
};

export default PrivateRoute;
