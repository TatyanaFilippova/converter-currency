import { useContext, useEffect, useState } from "react";
import { ContextData } from "../context/data.tsx";

export default function useErrors() {
  const { value } = useContext(ContextData);
  const [errors, setErrors] = useState({
    moneyCurrency: "",
    receivedWell: "",
  });

  useEffect(() => {
    const newErrors = {
      moneyCurrency: "",
      receivedWell: "",
    };

    if (!value.moneyCurrency) {
      newErrors.moneyCurrency = "Пожалуйста, введите сумму";
    }
    if (!value.receivedWell) {
      newErrors.receivedWell = "Пожалуйста, выберите валюту";
    }

    setErrors(newErrors);
  }, [value.moneyCurrency, value.receivedWell]);

  return errors;
}
