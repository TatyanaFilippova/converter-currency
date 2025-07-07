import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import { TextField, FormHelperText } from "@mui/material";
import { ContextData } from "../../context/data.tsx";

export default function ReceivedCurrencyInput() {
  const [receivedWell, setReceivedWell] = useState("");
  const finalСurrency = "";
  const [errors, setErrors] = useState({
    receivedWell: "",
  });

  useEffect(() => {
    const newErrors = {
      receivedWell: "",
    };

    if (!receivedWell) {
      newErrors.receivedWell = "Пожалуйста, выберите валюту";
    }

    setErrors(newErrors);
  }, [receivedWell]);

  const handleChange = (event: SelectChangeEvent) => {
    setReceivedWell(event.target.value as string);
  };

  //вызываю контекст
  const { setValue, value } = useContext(ContextData);

  useEffect(() => {
    setValue({
      ...value,
      receivedWell: receivedWell,
      receivedMoney: finalСurrency,
    });
  }, [receivedWell, finalСurrency]);
  //
  console.log(value.receivedWell);
  console.log(value.receivedMoney);

  return (
    <div className={styles.wrapper}>
      <Box sx={{ minWidth: 120, width: "100%", mb: 2 }}>
        <FormControl fullWidth error={!!errors.receivedWell}>
          <InputLabel id="demo-simple-select-label">Получаю</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={receivedWell}
            label="Получаю"
            onChange={handleChange}
            className={styles.input}
          >
            <MenuItem value={"RUB"}>RUB - Рубли</MenuItem>
            <MenuItem value={"GPB"}>GPB - Фунт стерлингов</MenuItem>
            <MenuItem value={"USD"}>USD - Доллар США</MenuItem>
            <MenuItem value={"EUR"}>EUR - Евро</MenuItem>
          </Select>
          {errors.receivedWell && (
            <FormHelperText>{errors.receivedWell}</FormHelperText>
          )}
        </FormControl>
      </Box>

      <Box component="div" sx={{ "& > :not(style)": { width: "100%" }, mb: 2 }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={finalСurrency}
          label=""
          type="number"
          disabled={true}
          className={styles.input}
        />
      </Box>
    </div>
  );
}
