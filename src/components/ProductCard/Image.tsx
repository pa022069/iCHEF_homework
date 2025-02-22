import { memo } from "react";

type TImageProps = {
  src: string;
  alt?: string;
  className?: string;
  [key: string]: any;
};

const Image = ({ src, alt = "", className, ...props }: TImageProps) => {
  return (
    <img
      src={src}
      className={`card-img-top ${className}`}
      alt={alt}
      {...props}
    />
  );
};

export default memo(Image);
