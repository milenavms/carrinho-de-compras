import { useState, useContext } from "react";
import { ListShoppingCartContext } from "../../context/ListProductContext";
import { IDataListProduct } from "../../service/getProducts";

export const useListShoppingCartContext = () => {
  const { shoppingCart, setShoppingCart } = useContext(ListShoppingCartContext);

  function addProducToShoppingCart(novoProduto: IDataListProduct) {
    setShoppingCart([...shoppingCart, novoProduto]);
  }

  return {
    shoppingCart,
    setShoppingCart,
    addProducToShoppingCart,
  };
};
