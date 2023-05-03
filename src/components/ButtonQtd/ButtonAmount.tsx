import * as React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styledComponets from "styled-components";
import Divider from "@mui/material/Divider";

const Input = styledComponets.input.attrs({ type: "text" })`
  width: 100%;
  padding: 12px 5px;
  box-sizing: border-box;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  text-align: center;
`;

export default function ButtonAmount() {
  return (
    <div>
      <Stack
        sx={{
          borderRadius: "8px",
          border: "1px solid #F1EDED",
        }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <IconButton>
          <AddIcon />
        </IconButton>

        <Input
          id="inputEmail"
          className="form-control"
          value="100"
          placeholder=""
          autoFocus
          disabled
        />

        <IconButton>
          <RemoveIcon />
        </IconButton>
      </Stack>
    </div>
  );
}
