import React, { useState } from "react";
import PropTypes from "prop-types";
import VSensor from "react-visibility-sensor";

const VisibilitySensor = props => {
    const [active, SetActive] = useState(true)
    const { once, children, ...theRest } = props;
    return (
        <VSensor
            active={active}
            onChange={(isVisible) =>
                once &&
                isVisible &&
                SetActive(false)
            }
            {...theRest}
        >
            {({ isVisible }) => children({ isVisible })}
        </VSensor>
    );

}

VisibilitySensor.propTypes = {
    once: PropTypes.bool,
    children: PropTypes.func.isRequired,
};

VisibilitySensor.defaultProps = {
    once: false,
};

export default VisibilitySensor;