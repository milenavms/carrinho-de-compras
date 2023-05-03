import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonAmount from "../ButtonQtd/ButtonAmount";
import { styled } from "@mui/material/styles";
import img from "../../assets/images/make.png";
import styledComponets from "styled-components";

const Img = styledComponets.img`
  width: 100%;
  height: 40px;
  object-fit: cover;
  object-position: bottom;

`;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  maxWidth: 150,
  boxShadow: "none",
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

export default function TableShoppingCart() {
  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: "none", paddingTop: "10px" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ padding: "1px", paddingLeft: "16px" }}>
              Produtos
            </TableCell>
            <TableCell sx={{ padding: "1px", paddingLeft: "16px" }}>
              {" "}
              Preço{" "}
            </TableCell>
            <TableCell sx={{ padding: "1px", paddingLeft: "16px" }}>
              Quantidade
            </TableCell>
            <TableCell sx={{ padding: "1px", paddingLeft: "16px" }}>
              Subtotal
            </TableCell>
            <TableCell sx={{ padding: "1px" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar>
                    <Img src={img} alt="img product" />
                  </Avatar>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    sx={{ paddingLeft: "15px", marginBottom: "0px" }}
                  >
                    {row.name}
                  </Typography>
                </Box>
              </TableCell>

              <TableCell align="left">R$ {row.fat}</TableCell>
              <TableCell align="left">
                <Item>
                  <ButtonAmount />
                </Item>
              </TableCell>
              <TableCell align="right">R$ {row.carbs}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
