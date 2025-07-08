import Box from "@mui/material/Box";
import { type ChangeEvent, useContext } from "react";
import styles from "./style.module.css";
import { TextField } from "@mui/material";
import { ContextData } from "../../context/data.tsx";
import useErrors from "../../hooks/useErrors.ts";

export default function MyCurrencyInput() {
  const { setValue, value } = useContext(ContextData);
  const errors = useErrors();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (+event.target.value > 0) {
      setValue({
        ...value,
        moneyCurrency: event.target.value as string,
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <Box component="div" sx={{ "& > :not(style)": { width: "100%" }, mb: 2 }}>
        <TextField
          id="outlined-basic"
          value={"RUB - Рубли"}
          aria-readonly={true}
          label={"Отдаю"}
        />
      </Box>
      <Box
        component="div"
        sx={{ "& > :not(style)": { width: "100%" }, mb: 2, height: "56px" }}
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={value.moneyCurrency}
          onChange={handleChange}
          error={!!errors.moneyCurrency}
          helperText={errors.moneyCurrency}
          label="Сумма в ₽"
          type="number"
        />
      </Box>
    </div>
  );
}
