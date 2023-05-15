import axios from "axios";

export interface IDataListProduct {
  id: number;
  name: string;
  price: string;
  description: string;
  image_link: string;
}

interface IProduct {
  data: IDataListProduct[];
  status: number;
}

export async function getProducts(): Promise<any> {
  const endpoint =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=pure anada";

  const response = await axios.get<IProduct>(endpoint);

  return response.data;
}
