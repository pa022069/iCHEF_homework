import { memo } from "react";
import { TProductData } from "types/api-products";
import ProductCard from "components/ProductCard";

type TProductsProps = {
  data: TProductData[];
};

function Products({ data }: TProductsProps) {
  return (
    <ul className="list-group product-list">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default memo(Products);
