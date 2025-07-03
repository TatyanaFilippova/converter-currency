import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import styles from "./style.module.css";
import { TextField } from "@mui/material";

export default function BasicSelect() {
  const [well, setWell] = useState("");
  const [currencies, setCurrencies] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setWell(event.target.value as string);
  };
  const handleChange2 = (event: any) => {
    setCurrencies(event.target.value as string);
  };

  return (
    <div className={styles.wrapper}>
      <Box sx={{ minWidth: 120, width: "100%" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Отдаю</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={well}
            label="Отдаю"
            onChange={handleChange}
          >
            <MenuItem value={10}>RUB - Рубли</MenuItem>
            <MenuItem value={20}>GPB - Фунт стерлингов</MenuItem>
            <MenuItem value={30}>USD - Доллар США</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        component="form"
        sx={{ "& > :not(style)": { width: "100%" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={currencies}
          onChange={handleChange2}
        />
      </Box>
    </div>
  );
}
