import React from "react";
import PropTypes from "prop-types";

function SubSectionHeading({ children }) {
    return (
        <div className="section-title text-left">
            <span className="subtitle">{children}</span>
        </div>
    );
}

SubSectionHeading.propTypes = {
    children: PropTypes.any,
};

export default SubSectionHeading;
