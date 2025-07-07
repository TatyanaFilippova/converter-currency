import styles from "./style.module.css";

interface ICurrencyCard {
  currency: string;
  value: string;
}

const CurrencyCard = ({ currency, value }: ICurrencyCard) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Курс {currency}</div>
      <div className={styles.well}>{value}</div>
    </div>
  );
};

export default CurrencyCard;
