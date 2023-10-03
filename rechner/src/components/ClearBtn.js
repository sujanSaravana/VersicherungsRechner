import React from "react";
import PropTypes from "prop-types"; 

const ClearBtn = ({ onClick }) => {
    return <button onClick={onClick} className="clearbtn">Clear</button>;
};

ClearBtn.propTypes = {
    onClick: PropTypes.func.isRequired, 
};

export default ClearBtn;
