import { memo } from "react";

type TNameProps = {
  text: string;
  className?: string;
};

const Name = ({ text, className, ...props }: TNameProps) => {
  return (
    <h5 className={`card-title ${className}`} {...props}>
      {text}
    </h5>
  );
};

export default memo(Name);
