import { useNavigate } from "react-router-dom";

export const getLastSegment = (str: string): string => {
  if (!str) return "";
  const parts = str.split("-");
  return parts[parts.length - 1];
};
