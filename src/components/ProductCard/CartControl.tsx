import { TProductData } from "types/api-products";
import { useCart } from "context/cartState";
import Button, { VARIANT } from "libs/core/Button";
import NumberControl from "components/NumberControl";
import { useQuantityControl } from "hooks/useQuantityControl";
import { useCallback } from "react";

type TCartControlProps = Pick<TProductData, "id"> & {
  min?: number;
  max?: number;
  set?: number;
  defaultValue?: number;
};

const CartControl = ({
  id,
  min = 1,
  max = 99,
  set = 1,
  defaultValue = 1,
}: TCartControlProps) => {
  const {
    quantity,
    handleAddQuantity,
    handleRemoveQuantity,
    handleResetQuantity,
  } = useQuantityControl({
    min,
    max,
    set,
    defaultValue,
  });
  const { addToCart } = useCart();

  const handleAddToCart = useCallback(
    (productId: TProductData["id"], productQuantity: number) => {
      addToCart(productId, productQuantity);
      handleResetQuantity();
    },
    [id, quantity]
  );

  return (
    <>
      <NumberControl
        quantity={quantity}
        handleAdd={handleAddQuantity}
        handleRemove={handleRemoveQuantity}
      />
      <Button
        onClick={() => handleAddToCart(id, quantity)}
        variant={VARIANT.PRIMARY}
        className="add-to-cart-button"
      >
        加入購物車
      </Button>
    </>
  );
};

export default CartControl;
