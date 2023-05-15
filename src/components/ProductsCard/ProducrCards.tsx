import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../../assets/images/make.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import { IDataListProduct } from "../../service/getProducts";
import { NavLink } from "react-router-dom";
import { useListShoppingCartContext } from "../../communs/hooks/useListShoppingCartContext";
import { useContext } from "react";
import { ListShoppingCartContext } from "../../context/ListProductContext";

export default function ProductsCard(props: IDataListProduct) {
  const { addProducToShoppingCart } = useListShoppingCartContext();
  return (
    <Card>
      <CardMedia
        component="img"
        alt="img"
        height="145"
        image={`${props.image_link}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="left">
          {props.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="left"
          sx={{
            maxWidth: "100%",
            maxHeight: "64px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "16px",
            display: "-webkit-box",
            WebkitLineClamp: "4",
            WebkitBoxOrient: "vertical",
          }}
        >
          {props.description}
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
          <NavLink to={`/details/${props.name} `}> Mais detalhes</NavLink>
        </Button>

        <IconButton
          size="small"
          aria-label="add to shopping cart"
          onClick={() => addProducToShoppingCart(props)}
        >
          <AddShoppingCartIcon sx={{ color: "#FF3A7D" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
