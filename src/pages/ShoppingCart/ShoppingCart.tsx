import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import styledComponets from "styled-components";
import Typography from "@mui/material/Typography";
import TableShoppingCart from "../../components/TableShoppingCart/TableShoppingCart";
import BreadcrumbsCustom from "../../components/BreadcrumbsCustom/BreadcrumbsCustom";

const ButtonCustom = styledComponets.button`
background: #F24E1E;
color: #FFF;
font-size: 1em;
width: 100%;
height: 40px;
margin-top: 20px;
padding: 0.50em 1em;
border: 1px solid palevioletred;
border-radius: 8px;
  &:hover: {
    background: #9b462c,
    box-shadow: none,
  }
  `;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "none",
  boxShadow: "none",
  padding: theme.spacing(2),
}));

export default function ShoppingCart() {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: 2 }}>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid xs={12}>
          <Item>
            <Box>
              <BreadcrumbsCustom name="Carrinho de Compras" />
            </Box>
          </Item>
        </Grid>

        <Grid xs={12} sm={8}>
          <Item>
            <Typography variant="h5" component="h1" align="left">
              Resumo do Pedido
            </Typography>

            <TableShoppingCart />
          </Item>
        </Grid>

        <Grid xs={12} sm={3}>
          <Item>
            <Typography variant="h5" component="h1" align="left">
              Resumo do Pedido
            </Typography>
            <Grid container sx={{ justifyContent: "space-between" }}>
              <Grid>
                <Typography gutterBottom variant="subtitle1" component="div">
                  price
                </Typography>
              </Grid>
              <Grid>
                <Typography gutterBottom variant="subtitle1" component="div">
                  $4.50
                </Typography>
              </Grid>
            </Grid>

            <ButtonCustom>Pagar</ButtonCustom>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
