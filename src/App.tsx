import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Container } from "@mui/system";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
