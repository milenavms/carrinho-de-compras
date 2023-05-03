import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";
import styledComponets from "styled-components";

import img from "../../assets/images/make.png";

const Img = styledComponets.img`
  max-width: 100%;
  width: 240px; 
  border-radius: 4px;

`;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  border: "none",
  boxShadow: "none",
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

export default function CardImgDescription() {
  return (
    <Item>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item>
          <ButtonBase>
            <Img src={img} alt="img product" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h5" component="h1" align="left">
                Nome do Produto
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                align="left"
                lineHeight="1.5"
              >
                Lippie Pencil A long-wearing and high-intensity lip pencil that
                glides on easily and prevents feathering. Many of our Lippie
                Stix have a coordinating Lippie Pencil designed to compliment it
                perfectly, but feel free to mix and match!
              </Typography>
            </Grid>

            <Grid item container sx={{ justifyContent: "space-between" }}>
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
          </Grid>
        </Grid>
      </Grid>
    </Item>
  );
}
