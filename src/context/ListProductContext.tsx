import { useState, useContext } from "react";
import { createContext } from "react";
import { IDataListProduct } from "../service/getProducts";

interface props {
  children: JSX.Element | JSX.Element[];
}

type GlobalContent = {
  shoppingCart: IDataListProduct[];
  setShoppingCart: (c: IDataListProduct[]) => void;
};

export const ListShoppingCartContext = createContext<GlobalContent>({
  shoppingCart: [],
  setShoppingCart: () => {},
});

ListShoppingCartContext.displayName = "List Shopping Cart";

export const ShoppingCartProvider = ({ children }: props) => {
  const [shoppingCart, setShoppingCart] = useState<IDataListProduct[]>([]);

  return (
    <ListShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </ListShoppingCartContext.Provider>
  );
};
