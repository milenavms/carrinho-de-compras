import { createTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

import "./index.css";

const theme = createTheme();
theme.typography.h5 = {
  marginBottom: "1rem",
  fontSize: "1rem",
  textAlign: "left",
};

const nomes = [
  {
    id: "1",
    nome: "liquid",
  },
  {
    id: "2",
    nome: "liquid",
  },
  {
    id: "3",
    nome: "liquid",
  },
  {
    id: "4",
    nome: "liquid",
  },
];

export default function ProductMenu() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <>
      {nomes.map((nome) => (
        <Chip
          key={nome.id}
          label={nome.nome}
          onClick={handleClick}
          sx={{ marginRight: "10px", marginBottom: "10px" }}
        />
      ))}
    </>
  );
}
