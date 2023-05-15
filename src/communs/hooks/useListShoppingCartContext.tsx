import { useState, useContext } from "react";
import { ListShoppingCartContext } from "../../context/ListProductContext";
import { IDataListProduct } from "../../service/getProducts";

export const useListShoppingCartContext = () => {
  const { shoppingCart, setShoppingCart } = useContext(ListShoppingCartContext);

  function addProducToShoppingCart(novoProduto: IDataListProduct) {
    console.log("add produto no carrinho de compra");
  }

  return {
    shoppingCart,
    setShoppingCart,
    addProducToShoppingCart,
  };
};
