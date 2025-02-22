import { TProductData } from "types/api-products";

import Name from "./Name";
import Price from "./Price";
import Image from "./Image";
import CartControl from "./CartControl";

type TCardProps = {
  product: TProductData;
};

export default function ProductCard({ product }: TCardProps) {
  const { id, name, price, imgUrl, sale, stock } = product;

  return (
    <li className="list-group-item product-item">
      <div className="content">
        <Name text={name} />
        <Price price={price} sale={sale} />
        <CartControl id={id} max={stock} />
      </div>
      {typeof imgUrl === "string" && <Image src={imgUrl} />}
    </li>
  );
}
