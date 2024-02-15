import PropTypes from "prop-types";

const AddButton = ({ onClick }) => {
  return <button className="bg-amber-200 px-11 py-2 rounded-lg border-2 border-solid border-stone-800 font-semibold hover:bg-stone-800 hover:border-amber-200 hover:text-white" onClick={onClick}>Add</button>;
};

AddButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddButton;
