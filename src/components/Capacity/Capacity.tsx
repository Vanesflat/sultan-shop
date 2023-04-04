type CapacityProps = {
  sizeType: string;
  size: string;
};

function Capacity({ sizeType, size }: CapacityProps): JSX.Element {
  return (
    <p className={`product__capacity capacity capacity--${sizeType === 'volume' ? 'bottle' : 'box'}`}>{size}</p>
  );
}

export default Capacity;