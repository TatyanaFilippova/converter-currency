import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { type ChangeEvent, useEffect, useState } from "react";
import styles from "./style.module.css";
import { TextField, FormHelperText } from "@mui/material";

export default function MyCurrencyInput() {
  const [well, setWell] = useState("");
  const [currencies, setCurrencies] = useState("");
  const [errors, setErrors] = useState({
    well: "",
    currencies: "",
  });

  useEffect(() => {
    const newErrors = {
      well: "",
      currencies: "",
    };

    if (!well) {
      newErrors.well = "Пожалуйста, выберите валюту";
    }

    if (!currencies) {
      newErrors.currencies = "Пожалуйста, введите сумму";
    } else if (isNaN(Number(currencies))) {
      newErrors.currencies = "Сумма должна быть числом";
    } else if (Number(currencies) <= 0) {
      newErrors.currencies = "Сумма должна быть больше нуля";
    }

    setErrors(newErrors);
  }, [well, currencies]);

  const handleChange = (event: SelectChangeEvent) => {
    setWell(event.target.value as string);
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrencies(event.target.value as string);
  };

  return (
    <div className={styles.wrapper}>
      <Box sx={{ minWidth: 120, width: "100%", mb: 2 }}>
        <FormControl fullWidth error={!!errors.well}>
          <InputLabel id="demo-simple-select-label">Отдаю</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={well}
            label="Отдаю"
            onChange={handleChange}
          >
            <MenuItem value={"Рубль"}>RUB - Рубли</MenuItem>
            <MenuItem value={"Фунт"}>GPB - Фунт стерлингов</MenuItem>
            <MenuItem value={"Доллар"}>USD - Доллар США</MenuItem>
          </Select>
          {errors.well && <FormHelperText>{errors.well}</FormHelperText>}
        </FormControl>
      </Box>

      <Box component="div" sx={{ "& > :not(style)": { width: "100%" }, mb: 2 }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={currencies}
          onChange={handleChange2}
          error={!!errors.currencies}
          helperText={errors.currencies}
          label="Сумма"
          type="number"
        />
      </Box>
    </div>
  );
}
