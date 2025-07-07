import { useContext, useEffect, useState } from "react";
import { ContextData } from "../context/data.tsx";

export default function useErrors() {
  const { value } = useContext(ContextData);
  const [errors, setErrors] = useState({
    myCurrency: "",
    moneyCurrency: "",
    receivedWell: "",
  });

  useEffect(() => {
    const newErrors = {
      myCurrency: "",
      moneyCurrency: "",
      receivedWell: "",
    };

    if (!value.myCurrency) {
      newErrors.myCurrency = "Пожалуйста, выберите валюту";
    }

    if (!value.moneyCurrency) {
      newErrors.moneyCurrency = "Пожалуйста, введите сумму";
    } else if (isNaN(Number(value.moneyCurrency))) {
      newErrors.moneyCurrency = "Сумма должна быть числом";
    } else if (Number(value.moneyCurrency) <= 0) {
      newErrors.moneyCurrency = "Сумма должна быть больше нуля";
    }

    if (!value.receivedWell) {
      newErrors.receivedWell = "Пожалуйста, выберите валюту";
    }

    setErrors(newErrors);
  }, [value.myCurrency, value.moneyCurrency, value.receivedWell]);

  return errors;
}
