import { useState, useCallback } from "react";

type ThooksProps = {
  min?: number;
  max?: number;
  set?: number;
  defaultValue?: number;
};

export const useQuantityControl = ({
  min = 1,
  max = 99,
  set = 1,
  defaultValue = 1,
}: ThooksProps = {}) => {
  const [quantity, setQuantity] = useState(defaultValue);
  const handleAddQuantity = useCallback(() => {
    setQuantity((prev) => {
      if (prev >= max) return prev;
      return (prev += set);
    });
  }, [set]);

  const handleRemoveQuantity = useCallback(() => {
    setQuantity((prev) => {
      if (prev <= set) return prev;
      return (prev -= set);
    });
  }, [set]);

  const handleResetQuantity = () => {
    setQuantity(min);
  };

  return {
    quantity,
    handleAddQuantity,
    handleRemoveQuantity,
    handleResetQuantity,
  };
};
