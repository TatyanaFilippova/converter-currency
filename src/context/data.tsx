import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useState,
} from "react";

interface Currency {
  myCurrency: string;
  moneyCurrency: string;
  receivedWell: string;
  receivedMoney: string;
  currentRate: string;
}

interface ContextProps {
  children: ReactNode;
}

const currencyExchange: Currency = {
  myCurrency: "", //выбранная из списка валюта
  moneyCurrency: "", //веденное число этой валюты
  receivedWell: "", //выбранная из списка валюта, которую хочу получить
  receivedMoney: "", //вычисляемые данные
  currentRate: "", //действующий курс для вычисления
};

export const ContextData = createContext<{
  value: Currency;
  setValue: Dispatch<SetStateAction<Currency>>;
}>({
  value: currencyExchange,
  setValue: () => {},
});

const ContextDataProvider = ({ children }: ContextProps) => {
  const [value, setValue] = useState<Currency>(currencyExchange);

  return (
    <ContextData.Provider value={{ value, setValue }}>
      {children}
    </ContextData.Provider>
  );
};

export default ContextDataProvider;
