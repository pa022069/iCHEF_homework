import { memo } from "react";

export enum VARIANT {
  DEFAULT = "default",
  PRIMARY = "primary",
}

type TButtonProps = {
  className?: string;
  variant?: VARIANT;
  onClick?: () => void;
  children: string | React.ReactNode;
  [key: string]: any;
};

function Button({
  className,
  variant = VARIANT.DEFAULT,
  onClick,
  children,
  ...props
}: TButtonProps) {
  const variantConfig = {
    [VARIANT.DEFAULT]: "",
    [VARIANT.PRIMARY]: "btn-primary",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn ${variantConfig[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default memo(Button);
