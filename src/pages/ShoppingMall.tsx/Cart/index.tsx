import Button, { VARIANT } from "libs/core/Button";
import CartHeader from "./CartHeader";
import CartList from "./CartList";
import { useCart } from "context/cartState";
import { TProductData } from "types/api-products";
import { useMemo } from "react";
import { TCartItems } from "./types";

type TCartProps = {
  data: TProductData[];
};

export default function Cart({ data }: TCartProps) {
  const { cart, clearCart } = useCart();

  const refineCartList = useMemo(() => {
    return Object.keys(cart).reduce((acc: TCartItems[], key: string) => {
      const quantity = cart[key as keyof typeof cart];
      const findProduct = data.find((item: TProductData) => item.id === key);
      if (findProduct) {
        const { id, name, price, sale, stock } = findProduct;
        acc.push({
          id,
          name,
          quantity,
          stock,
          total: (sale || price) * quantity,
        });
      }
      return acc;
    }, []);
  }, [data, cart]);

  const sum = useMemo(
    () =>
      refineCartList.reduce((acc: number, cur: TCartItems) => {
        return (acc += cur.total);
      }, 0),
    [refineCartList]
  );

  return (
    <div className="cart-wrapper">
      <CartHeader text="購物車清單" />
      <CartList data={refineCartList} />
      <Button onClick={clearCart} variant={VARIANT.PRIMARY}>
        清空購物車
      </Button>
    </div>
  );
}
