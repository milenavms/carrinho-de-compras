import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Container } from "@mui/system";
import { ShoppingCartProvider } from "./context/ListProductContext";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <NavBar />
      <ShoppingCartProvider>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
