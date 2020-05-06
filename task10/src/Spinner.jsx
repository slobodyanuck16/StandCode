import React from "react";

const Spinner = (props) => {
    const {size} = props;
    const styles = {
        width: size,
        height: size,
    };

    return <span style={styles} className="spinner"></span>;
};

export default Spinner;