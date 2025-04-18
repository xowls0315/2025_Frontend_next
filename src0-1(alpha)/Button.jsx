const Button = (props) => {
  return (
    <button
      className={`${props.bg} ${props.color} ${props.borderRadius} ${props.padding}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
