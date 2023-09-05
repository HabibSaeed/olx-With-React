import React, { useState } from "react";
import sell from "../assets/buyitsellit.jpeg";

const containerSellStyle = {
    margin: "0px 25px",
    display: "flex",

    alignItems: "center",
    flexDirection: "column",
};

const subSellContainerStyle = {
    width: "100%",
};

const ul = {
    display: "flex",
    marginBottom: "20px",
    boxShadow: "3px 1px 4px 0 rgba(0,0,0,0.4)",
    padding: "1.2rem",
};

const li = {
    color: "#002f34",
    cursor: "pointer",
    listStyleType: "none",
    fontSize: "1.2rem",
    lineHeight: "1.5",
    letterSpacing: "normal",
    marginLeft: "20px",
    fontWeight: "normal",
    transition: "all 0.3s ease", // Add a smooth transition effect for background-color
};

const boldFirstLi = {
    fontWeight: "bold",
};

const hoverLi = {
    color: "#0056ac", // Change the background color on hover
};

const imgBuySellStyle = {
    width: "100%",
};

const Sell = () => {
    const [hoveredLi, setHoveredLi] = useState(null);

    return (
        <>
            <ul style={ul}>
                <li
                    style={{
                        ...li,
                        ...(hoveredLi === 0 ? hoverLi : {}),
                        ...boldFirstLi,
                    }}
                    onMouseEnter={() => setHoveredLi(0)}
                    onMouseLeave={() => setHoveredLi(null)}
                >
                    All categories
                </li>
                <li
                    style={{ ...li, ...(hoveredLi === 1 ? hoverLi : {}) }}
                    onMouseEnter={() => setHoveredLi(1)}
                    onMouseLeave={() => setHoveredLi(null)}
                >
                    Mobile Phones
                </li>
                <li
                    style={{ ...li, ...(hoveredLi === 2 ? hoverLi : {}) }}
                    onMouseEnter={() => setHoveredLi(2)}
                    onMouseLeave={() => setHoveredLi(null)}
                >
                    Cars
                </li>
                <li
                    style={{ ...li, ...(hoveredLi === 3 ? hoverLi : {}) }}
                    onMouseEnter={() => setHoveredLi(3)}
                    onMouseLeave={() => setHoveredLi(null)}
                >
                    Motorcycles
                </li>
                <li
                    style={{ ...li, ...(hoveredLi === 4 ? hoverLi : {}) }}
                    onMouseEnter={() => setHoveredLi(4)}
                    onMouseLeave={() => setHoveredLi(null)}
                >
                    Houses
                </li>
                <li
                    style={{ ...li, ...(hoveredLi === 5 ? hoverLi : {}) }}
                    onMouseEnter={() => setHoveredLi(5)}
                    onMouseLeave={() => setHoveredLi(null)}
                >
                    TV - Video - Audio
                </li>
                <li
                    style={{ ...li, ...(hoveredLi === 6 ? hoverLi : {}) }}
                    onMouseEnter={() => setHoveredLi(6)}
                    onMouseLeave={() => setHoveredLi(null)}
                >
                    Tablets
                </li>
                <li
                    style={{ ...li, ...(hoveredLi === 7 ? hoverLi : {}) }}
                    onMouseEnter={() => setHoveredLi(7)}
                    onMouseLeave={() => setHoveredLi(null)}
                >
                    Land & Plots
                </li>
            </ul>

            <section className="container" style={containerSellStyle}>
                <div className="sub_Sell_container" style={subSellContainerStyle}>
                    <img src={sell} alt="Sell It Buy It" className="imgbuysell" style={imgBuySellStyle} />
                </div>
            </section>
        </>
    );
};

export default Sell;
