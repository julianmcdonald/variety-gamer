const Button = ({ submitHandler }) => {
  return (
    <button className="button" type="submit" onClick={() => submitHandler()}>
      Submit
    </button>
  );
};

export default Button;
