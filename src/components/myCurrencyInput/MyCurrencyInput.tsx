import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { type ChangeEvent, useContext } from "react";
import styles from "./style.module.css";
import { TextField, FormHelperText } from "@mui/material";
import { ContextData } from "../../context/data.tsx";
import useErrors from "../../hook/useErrors.ts";

export default function MyCurrencyInput() {
  const { setValue, value } = useContext(ContextData);
  const errors = useErrors();

  const handleChange = (event: SelectChangeEvent) => {
    setValue({
      ...value,
      myCurrency: event.target.value as string,
    });
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      moneyCurrency: event.target.value as string,
    });
  };

  console.log(value.myCurrency);
  console.log(value.moneyCurrency);

  return (
    <div className={styles.wrapper}>
      <Box sx={{ minWidth: 120, width: "100%", mb: 2 }}>
        <FormControl fullWidth error={!!errors.myCurrency}>
          <InputLabel id="demo-simple-select-label">Отдаю</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value.myCurrency}
            label="Отдаю"
            onChange={handleChange}
            className={styles.input}
          >
            <MenuItem value={"RUB"}>RUB - Рубли</MenuItem>
            <MenuItem value={"GPB"}>GPB - Фунт стерлингов</MenuItem>
            <MenuItem value={"USD"}>USD - Доллар США</MenuItem>
            <MenuItem value={"EUR"}>EUR - Евро</MenuItem>
          </Select>
          {errors.myCurrency && (
            <FormHelperText>{errors.myCurrency}</FormHelperText>
          )}
        </FormControl>
      </Box>

      <Box component="div" sx={{ "& > :not(style)": { width: "100%" }, mb: 2 }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={value.moneyCurrency}
          onChange={handleChange2}
          error={!!errors.moneyCurrency}
          helperText={errors.moneyCurrency}
          label="Сумма"
          type="number"
        />
      </Box>
    </div>
  );
}
