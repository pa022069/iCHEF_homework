import { memo } from "react";

type TCartHeaderProps = {
  text: string;
};

const CartHeader = ({ text }: TCartHeaderProps) => {
  return <h4>{text}</h4>;
};

export default memo(CartHeader);
