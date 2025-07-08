import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { useContext } from "react";
import styles from "./style.module.css";
import { FormHelperText } from "@mui/material";
import { ContextData } from "../../context/data.tsx";
import useErrors from "../../hooks/useErrors.ts";
import { useCalcWell } from "../../hooks/useCalcWell.ts";
import { symbols } from "../../helpers/well.ts";

export default function ReceivedCurrencyInput() {
  const { setValue, value } = useContext(ContextData);
  const finalCurrency = useCalcWell();
  const errors = useErrors();

  const handleChange = (event: SelectChangeEvent) => {
    setValue({
      ...value,
      receivedWell: event.target.value as string,
    });
  };

  return (
    <div className={styles.wrapper}>
      <Box sx={{ minWidth: 120, width: "100%", mb: 2, height: "56px" }}>
        <FormControl fullWidth error={!!errors.receivedWell}>
          <InputLabel id="demo-simple-select-label">Получаю</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value.receivedWell}
            label="Получаю"
            onChange={handleChange}
          >
            <MenuItem value={"GBP"}>GBP - Фунт стерлингов</MenuItem>
            <MenuItem value={"USD"}>USD - Доллар США</MenuItem>
            <MenuItem value={"EUR"}>EUR - Евро</MenuItem>
          </Select>
          {errors.receivedWell && (
            <FormHelperText>{errors.receivedWell}</FormHelperText>
          )}
        </FormControl>
      </Box>
      <div className={styles.input}>
        {finalCurrency
          ? finalCurrency + " " + symbols[value.receivedWell]
          : "0"}
      </div>
    </div>
  );
}
