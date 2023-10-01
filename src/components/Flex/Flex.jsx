import PropTypes from "prop-types";

function Flex({
  alignItems,
  children,
  flexDirection = "row",
  flexWrap = "nowrap",
  gap,
  justifyContent,
}) {
  return (
    <div
      style={{
        alignItems,
        display: "flex",
        flexDirection,
        flexWrap,
        gap,
        justifyContent,
      }}
    >
      {children}
    </div>
  );
}

Flex.propTypes = {
  alignItems: PropTypes.oneOf(["baseline", "center", "flex-end", "flex-start"]),
  children: PropTypes.node.isRequired,
  flexDirection: PropTypes.oneOf(["column", "row"]),
  flexWrap: PropTypes.oneOf(["nowrap", "wrap"]),
  gap: PropTypes.string,
  justifyContent: PropTypes.oneOf(["center", "flex-end", "flex-start"])
};

export default Flex;
