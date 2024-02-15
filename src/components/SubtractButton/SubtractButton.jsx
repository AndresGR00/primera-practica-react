import PropTypes from "prop-types";

const SubtractButton = ({ onClick }) => {
  return <button className="bg-indigo-400 px-7 py-2 rounded-lg border-2 border-solid border-indigo-800 font-semibold hover:bg-indigo-800 hover:border-indigo-400 hover:text-white" onClick={onClick}>Subtract</button>;
};

SubtractButton.propTypes = {
  onClick: PropTypes.func,
};

export default SubtractButton;
