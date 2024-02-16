import PropTypes from "prop-types";

export const Button = ({ onClick, name }) => {
  let buttonClass = "rounded-lg border-2 border-solid font-semibold ";
  if (name === "Subtract") {
    buttonClass +=
      "px-7 py-2 bg-indigo-400  border-indigo-800  hover:bg-indigo-800 hover:border-indigo-400 hover:text-white";
  }
  if (name === "Add") {
    buttonClass +=
      "bg-amber-200 px-11 py-2 border-stone-800  hover:bg-stone-800 hover:border-amber-200 hover:text-white";
  }
  return (
    <button className={buttonClass} onClick={onClick}>
      {name}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};
