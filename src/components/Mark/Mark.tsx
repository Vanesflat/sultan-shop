type MarkProps = {
  text: string;
};

function Mark({ text }: MarkProps): JSX.Element {
  return (
    <div className="product-card__marker">
      <span>{text}</span>
    </div>
  );
}

export default Mark;
