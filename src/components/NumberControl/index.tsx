import Button, { VARIANT } from "libs/core/Button";

type TNumberControlProps = {
  quantity: number;
  handleAdd: () => void;
  handleRemove: () => void;
};

const NumberControl = ({
  quantity,
  handleAdd,
  handleRemove,
}: TNumberControlProps) => {
  return (
    <div className="counter-wrapper btn-group">
      <Button variant={VARIANT.PRIMARY} onClick={() => handleRemove()}>
        -
      </Button>
      <div className="btn btn-outline-primary disabled">{quantity}</div>
      <Button variant={VARIANT.PRIMARY} onClick={() => handleAdd()}>
        +
      </Button>
    </div>
  );
};

export default NumberControl;
