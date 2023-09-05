import React from "react";

const cardStyle = {
    width: "18rem",
};

const imgSrcStyle = {
    width: "100%",
    height: "30vh",
};

const Products = (props) => {
    console.log(props.name);
    const { name, title, about, description, days } = props;

    return (
        <>
            <div className="card" style={cardStyle}>
                <img src={name} className="card-img-top imgsrc" style={imgSrcStyle} alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{about}</p>
                    <h5 className="card-text">{description}</h5>
                    <p className="card-text">{days}</p>
                </div>
            </div>
        </>
    );
};

export default Products;
