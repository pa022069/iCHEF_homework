import { TProductData } from "types/api-products";

export type TCartItems = Pick<TProductData, "id" | "name" | "stock"> & {
  quantity: number;
  total: number;
};
