import "./LotteryNumber.css";

import PropTypes from "prop-types";

function LotteryNumber({ disabled = false, drawn = false, value, onClick }) {
  return (
    <div
      className="lottery-number"
      style={{ backgroundColor: disabled ? (drawn ? "green":"red") : undefined }}
      onClick={disabled ? null : onClick}
    >
      <div>{disabled ? "X" : value}</div>
    </div>
  );
}

LotteryNumber.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LotteryNumber;
