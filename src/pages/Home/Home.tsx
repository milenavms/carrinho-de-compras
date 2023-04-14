import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "0 px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "none",
  boxShadow: "none",
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: 2 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Item>carrousel</Item>
        </Grid>

        <Grid xs={12}>
          <Item>menu</Item>
        </Grid>

        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={12} sm={4} md={3} key={index}>
            <Item>cards dos produtos</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
