import { useEffect, useState } from "react";
import { CartProvider } from "context/cartState";
import { API_URL } from "constants/api";
import { mockData } from "mock/shoppingMall";

import Products from "./Products";
import Cart from "./Cart";

export default function ShoppingMall() {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(API_URL.GET.SHOPPINGLIST);
        const data = await response.json();
        setFetchData(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchApi();
  }, []);

  if (fetchData.length === 0) return null;

  return (
    <CartProvider>
      <Products data={fetchData} />
      <Cart data={fetchData} />
    </CartProvider>
  );
}
