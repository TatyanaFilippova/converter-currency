import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { useContext } from "react";
import styles from "./style.module.css";
import { TextField, FormHelperText } from "@mui/material";
import { ContextData } from "../../context/data.tsx";
import useErrors from "../../hook/useErrors.ts";

export default function ReceivedCurrencyInput() {
  const { setValue, value } = useContext(ContextData);
  const finalСurrency = "";
  const errors = useErrors();

  const handleChange = (event: SelectChangeEvent) => {
    setValue({
      ...value,
      receivedWell: event.target.value as string,
      receivedMoney: finalСurrency,
    });
  };

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
            value={value.receivedWell}
            label="Получаю"
            onChange={handleChange}
            className={styles.input}
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
