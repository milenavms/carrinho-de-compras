import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../../assets/images/make.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";

export default function ProductsCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" alt="img" height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          justifyContent: "space-between",
          marginRight: "8px",
          marginLeft: "8px",
        }}
      >
        <Button size="small" sx={{ color: "#FF3A7D" }}>
          Mais detalhes
        </Button>

        <IconButton size="small" aria-label="add to shopping cart">
          <AddShoppingCartIcon sx={{ color: "#FF3A7D" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
