import { useContext } from "react";
import { ContextData } from "../context/data.tsx";

export const useCalcWell = () => {
  const { value } = useContext(ContextData);
  if (!value.currentRate) return 0;
  return (+value.moneyCurrency / +value.currentRate).toFixed(2).toString();
};
