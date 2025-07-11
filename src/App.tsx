import styles from "./App.module.css";
import CurrencyCard from "./components/currencyCard/CurrencyCard.tsx";
import { currency } from "./helpers/well.ts";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import MyCurrencyInput from "./components/myCurrencyInput/MyCurrencyInput.tsx";
import ReceivedCurrencyInput from "./components/receivedCurrencyInput/ReceivedCurrencyInput.tsx";
import { ContextData } from "./context/data.tsx";

export interface CurrencyValue {
  Value: number;
  Previous: number;
  CharCode: string;
  Name: string;
}

export interface CurrencyData {
  [key: string]: CurrencyValue;
}

export interface ApiResponse {
  Valute: CurrencyData;
}

function App() {
  const [data, setData] = useState<ApiResponse>();
  const { value, setValue } = useContext(ContextData);

  useEffect(() => {
    axios
      .get("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (!data) return;
    setValue({
      ...value,
      currentRate: data.Valute[value.receivedWell]?.Previous.toFixed(2),
    });
  }, [data, value.receivedWell]);

  if (!data) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Конвертер валют</div>
      <div className={styles.card_wrapper}>
        {currency.map((well: string) => {
          return (
            <CurrencyCard
              currency={well}
              key={well}
              value={data.Valute[well].Previous.toFixed(2)}
            />
          );
        })}
      </div>
      <div className={styles.well_wrapper}>
        <MyCurrencyInput />
        <ReceivedCurrencyInput />
      </div>
    </div>
  );
}

export default App;
