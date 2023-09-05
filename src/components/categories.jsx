import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const parentCategoriesStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderBottom: "1px solid whitesmoke",
};

const myCategoriesContainerStyle = {
    display: "flex",
    gap: "1%",
    width: "80%",
};

const Categories = () => {
    return (
        <>
            <section className="container mt-2">
                <nav className="navbar navbar-expand-lg p-0 m-0">
                    <div className="container-fluid ">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                            <div className="navbar-nav m-0 p-0">
                                {/* Apply the inline styles to the appropriate elements */}
                                <div style={parentCategoriesStyle}>
                                    {/* Your content here */}
                                </div>
                                <div style={myCategoriesContainerStyle}>
                                    {/* Your content here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
};

export default Categories;
