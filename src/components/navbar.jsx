import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faCar,
    faMagnifyingGlass,
    faAngleDown,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import xd from "../assets/bike.png";
import olx from "../assets/OLX-Logo.png";
import olxlogo from "../assets/OLX-Symbol.png";

const Navbar = () => {
    const headerStyle = {
        width: "100%",
        display: "flex",
        justifyContent: "start",
        backgroundColor: "whitesmoke",
        position: "sticky",
    };

    const preNavbarStyle = {
        display: "flex",
        justifyContent: "start",
        gap: "3%",
        paddingTop: "0px",
    };

    const preNavElementsStyle = {
        padding: "12px 10px",
        display: "flex",
        gap: "7px",
        fontWeight: "bold",
        alignItems: "center",
    };

    const navLogoStyle = {
        marginTop: "15px",
        width: "40px",
    };

    const iconStyle = {
        fontSize: "15xpx",
        padding: "5px 5px",
        fontWeight: "normal",
        backgroundColor: "gainsboro",
        borderRadius: "50%",
    };

    const navbar1Style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        flexWrap: "nowrap",
        paddingTop: "2%",
        gap: "2.5%",
    };

    const navLogoMainStyle = {
        width: "70px",
        marginLeft: "70px",
    };

    const locationSearchStyle = {
        display: "flex",
        border: "2px solid black",
        padding: "10px 10px",
        borderRadius: "5px",
        backgroundColor: "#fff",
    };

    const countrySearchStyle = {
        backgroundColor: "#fff",
        marginLeft: "10px",
        width: "40vh",
        border: "3px solid #012f34",
        borderRadius: "4px",
        outline: "none",
        border: "1px solid transparent",
    };

    const productSearchStyle = {
        display: "flex",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
        border: "2px solid #012f34",
        padding: "0px 0px",
        borderRadius: "5px",
        width: "100%",
        minWidth: "600px",
    };

    const productSearchInputStyle = {
        display: "flex",
        backgroundColor: "#fff",
        padding: "10px 10px",
        width: "100%",
        marginLeft: "10px",
        outline: "none",
        border: "1px solid transparent",
    };

    const blackSearchStyle = {
        padding: "12px 10px",
        backgroundColor: "black",
        color: "white",
        height: "100%",
    };

    const parentSellStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        textAlign: "center",
        cursor: "pointer",
        margin: "0px 10px 20px 0px",
    };

    const login = {
        cursor: "pointer",
        textAlign: "center",
        padding: "12px 10px 1px 10px",
        borderBottom: "2px solid black",
    };

    const childSellStyle = {
        textAlign: "center",
        position: "absolute",
        top: "28%",
        left: "30%",
        fontWeight: "bold",
    };

    return (
        <>
            <header style={headerStyle}>

                <nav className="container">

                    <section style={preNavbarStyle}>
                        <div>
                            <img src={olx} alt="My Image" style={navLogoStyle} />
                        </div>
                        <div style={preNavElementsStyle}>
                            <FontAwesomeIcon icon={faCar} style={iconStyle} /> MOTORS
                        </div>
                        <div style={preNavElementsStyle}>
                            <FontAwesomeIcon icon={faBuilding} style={iconStyle} /> PROPERTY
                        </div>
                    </section>


                    <section style={navbar1Style}>
                        <section>
                            <img src={olxlogo} alt="My Image" style={navLogoMainStyle} />
                        </section>

                        <section style={locationSearchStyle}>
                            <div>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                            <div>
                                <input
                                    className="p-0 country_search"
                                    style={countrySearchStyle}
                                    placeholder="Pakistan"
                                ></input>
                            </div>
                            <div>
                                {" "}
                                <FontAwesomeIcon icon={faAngleDown} />{" "}
                            </div>
                        </section>

                        <section style={productSearchStyle}>
                            <div className="product_search_input">
                                <input
                                    className="p-0 product_search_input"
                                    style={productSearchInputStyle}
                                    placeholder="Find Cars , Mobile Phones and more..."
                                ></input>
                            </div>
                            <div style={blackSearchStyle}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                        </section>

                        <section style={login}>
                            login
                        </section>

                        <section style={parentSellStyle}>
                            <img src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg" />
                            <div style={childSellStyle}>
                                <FontAwesomeIcon icon={faPlus} />
                                SELL
                            </div>
                        </section>

                    </section>

                </nav>

            </header>
        </>
    );
};
export default Navbar;
