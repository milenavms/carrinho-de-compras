import * as React from "react";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink, useParams } from "react-router-dom";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrume - Home.");
}

interface Breadcrumbs {
  name: String;
}

export default function BreadcrumbsCustom(props: Breadcrumbs) {
  const { detailsId } = useParams<string>();
  const { shoppingcartId } = useParams<string>();

  const constbreadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      <NavLink to="/">Home</NavLink>
    </Link>,
    <Typography key="2" color="text.primary">
      {props.name}
    </Typography>,
    <Typography key="3" color="text.primary">
      {detailsId ? detailsId : shoppingcartId}
    </Typography>,
  ];
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {constbreadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
