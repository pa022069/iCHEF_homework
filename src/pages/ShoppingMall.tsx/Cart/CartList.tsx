import { TCartItems } from "./types";
import { TProductData } from "types/api-products";
import NumberControl from "components/NumberControl";
import { useCartItemControl } from "hooks/useCartItemControl";
import { memo } from "react";

type TCartListProps = {
  data: TCartItems[];
};

type TCartItemProps = Pick<TProductData, "id" | "name"> & {
  total: number;
  quantity: number;
};

const CartListItem = ({ id, name, total, quantity }: TCartItemProps) => {
  const { handleAddQuantity, handleRemoveQuantity } = useCartItemControl({
    id,
    quantity,
  });

  return (
    <li className="list-group-item">
      <NumberControl
        quantity={quantity}
        handleAdd={handleAddQuantity}
        handleRemove={handleRemoveQuantity}
      />
      <span className="cart-item-desc">
        {name}：共 {total} 元
      </span>
    </li>
  );
};

const CartList = ({ data }: TCartListProps) => {
  return (
    <ul className="list-group cart">
      {data.map((item) => {
        const { id, name, total, quantity } = item;
        return (
          <CartListItem
            key={id}
            id={id}
            name={name}
            total={total}
            quantity={quantity}
          />
        );
      })}
    </ul>
  );
};

export default memo(CartList);
