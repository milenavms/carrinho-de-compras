import React, { useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import ProductMenu from "../../components/ProductMenu/ProductMenu";
import BackgroundHomePage from "../../assets/images/background_img.png";
import styledComponets from "styled-components";
import ProductsCard from "../../components/ProductsCard/ProducrCards";
import { IDataListProduct, getProducts } from "../../service/getProducts";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "0 px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "none",
  boxShadow: "none",
}));

const ImgBackGround = styledComponets.img`
  max-width: 100%;
  width: 1165px; 
  border-radius: 8px;

`;

export default function Home() {
  const [listProdutos, setListProdutos] = React.useState<IDataListProduct[]>(
    []
  );

  useEffect(() => {
    getProducts().then((response) => setListProdutos(response));
  }, []);

  return (
    <Box sx={{ flexGrow: 1, paddingTop: 2 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Item>
            <Box>
              <ImgBackGround src={BackgroundHomePage} alt="img background" />
            </Box>
          </Item>
        </Grid>

        <Grid xs={12}>
          <Item sx={{ backgroundColor: "#F9F7F7" }}>
            <ProductMenu />
          </Item>
        </Grid>
        {listProdutos.map((produto) => {
          return (
            <Grid xs={12} sm={4} md={3} key={produto.id}>
              <Item>
                <ProductsCard {...produto} key={produto.id} />
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
