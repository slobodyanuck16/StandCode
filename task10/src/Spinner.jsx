import React from "react";

const Spinner = (props) => {
    console.log(props);
    const {size} = props;
    const styles = {
        width: size,
        height: size,
    };

    return <span style={styles} className="spinner"></span>;
};

export default Spinner;
// const Spinner = ({ size }) => {
//     const style = {
//         width: `${size}px`,
//         height: `${size}px`,
//     };

//     return <span className="spinner" style={style}></span>;
// };

// export default Spinner;
