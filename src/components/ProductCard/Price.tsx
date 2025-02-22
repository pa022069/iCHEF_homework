import { memo } from "react";

type TPriceProps = {
  price: number;
  sale?: number;
  className?: string;
  [key: string]: any;
};

const Price = ({ price, className, sale, ...props }: TPriceProps) => {
  if (typeof sale === "number" && sale > price) {
    console.error("警告！特價價格高於定價，請注意！");
  }
  return (
    <p className={`card-text ${className}`} {...props}>
      <span
        style={{
          textDecoration: sale ? "line-through" : "",
          opacity: sale ? "0.3" : "1",
        }}
      >
        {price}
      </span>
      &nbsp;{sale} 元
    </p>
  );
};

export default memo(Price);
