import { createTheme, ThemeProvider } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

import "./index.css";

const theme = createTheme();
theme.typography.h5 = {
  marginBottom: "1rem",
  fontSize: "1rem",
  textAlign: "left",
};

const nomes = [
  "liquid",
  "liquid",
  "liquid",
  "liquid",
  "liqusssid",
  "liquid",
  "liquid",
  "liquid",
  "liqfffuid",
  "liquid",
  "liquid",
  "liqusssid",
  "liquid",
  "liquid",
  "liquid",
  "liquid",
  "liquid",
  "liquid",
  "liquid",
  "liquixxd",
];

export default function ProductMenu() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <>
      {nomes.map((nome) => (
        <Chip
          label={nome}
          onClick={handleClick}
          sx={{ marginRight: "10px", marginBottom: "10px" }}
        />
      ))}
    </>
  );
}
