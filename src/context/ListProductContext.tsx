import { useState } from "react";
import { createContext } from "react";
import { IDataListProduct } from "../service/getProducts";

interface props {
  children: JSX.Element | JSX.Element[];
}

const VALUE_INITIAL: IDataListProduct[] = [];

export const ListProductContext = createContext<any>({
  favorites: VALUE_INITIAL,
  setFavorites: () => console.warn("setFavorites initial"),
});

export const FavoriteProvider = ({ children }: props) => {
  const [favorites, setFavorites] = useState<any[]>(VALUE_INITIAL);

  return (
    <ListProductContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </ListProductContext.Provider>
  );
};
