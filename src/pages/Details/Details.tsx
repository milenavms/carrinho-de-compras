import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import styledComponets from "styled-components";
import Divider from "@mui/material/Divider";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import ButtonAmount from "../../components/ButtonQtd/ButtonAmount";
import ComplexGrid from "../../components/CardImgDescription/CardImgDescription";
import CardImgDescription from "../../components/CardImgDescription/CardImgDescription";

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

const Img = styledComponets.img`
  max-width: 100%;
  width: 240px; 
  border-radius: 4px;

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

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Details() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      MUI
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Core
    </Link>,
    <Typography key="3" color="text.primary">
      Breadcrumb
    </Typography>,
  ];
  return (
    <Box sx={{ flexGrow: 1, paddingTop: 2 }}>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid xs={12}>
          <Item>
            <Box>
              <Stack spacing={2}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
            </Box>
          </Item>
        </Grid>

        <Grid xs={12} sm={8}>
          <CardImgDescription />
        </Grid>

        <Grid xs={12} sm={3}>
          <Item>
            <Typography variant="h5" component="h1" align="left">
              Nome do Produto
            </Typography>
            <Grid container sx={{ justifyContent: "space-between" }}>
              <Grid>
                <Typography gutterBottom variant="subtitle1" component="div">
                  price und
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                  price total
                </Typography>
              </Grid>
              <Grid>
                <Typography gutterBottom variant="subtitle1" component="div">
                  $4.50
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                  $10.50
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ marginBottom: "20px" }} />

            <ButtonAmount />

            <ButtonCustom>Pagar</ButtonCustom>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
