import { useCart } from "context/cartState";
import { useCallback } from "react";
import { ALERT } from "enums/alert";
import { TProductData } from "types/api-products";

type TControlProps = Pick<TProductData, "id"> & {
  quantity: number;
};

export const useCartItemControl = ({ id, quantity }: TControlProps) => {
  const { addToCart, removeFromCart } = useCart();

  const handleAddQuantity = useCallback(() => {
    addToCart(id, 1);
  }, [id]);

  const handleRemoveQuantity = useCallback(() => {
    if (quantity > 1 || confirm(ALERT.DELETE_CONFIRM)) {
      removeFromCart(id);
    }
  }, [id, quantity]);

  return {
    handleAddQuantity,
    handleRemoveQuantity,
  };
};
