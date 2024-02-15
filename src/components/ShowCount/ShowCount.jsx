import PropTypes from "prop-types";

const ShowCount = ({count}) => {
  return <h1 className="ShowCount font-semibold text-2xl">You clicked here {count} times</h1>;
};

ShowCount.propTypes = {
  count: PropTypes.number,
};

export default ShowCount;
