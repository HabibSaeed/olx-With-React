import React from "react";

const Allcategories = (props) => {
    const pubgStyle = {
        width: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "15px",
        textAlign: "center",
        borderRadius: "50%",
        cursor: "pointer",
        fontWeight: "bold",
    };

    const imgStyle = {
        width: "80%",
        borderRadius: "50%",
    };

    return (
        <div style={pubgStyle}>
            <img
                src={props.imageSrc}
                style={imgStyle}
                className="img_allcategories"
                alt="Example"
            />
            <div>{props.name}</div>
        </div>
    );
};

export default Allcategories;
