import React from "react";
import image from "../assets/mobileolx.png";
import appstore from "../assets/appstore.svg";

const OlxMarketing = () => {
    const olxSectionStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        backgroundColor: "#f7f8f8",
    };

    const lineStyle = {
        margin: "4% 0",
        borderLeft: "1px solid gray",
    };

    const imgOlxStyle = {
        width: "100%",
        height: "100%",
    };

    const appstoreStyle = {
        width: "40%",
    };

    return (
        <>
            <section className="bg-body-tertiary">
                <section className="container" style={olxSectionStyle}>
                    <div className="imgolxdiv">
                        <img src={image} className="imgolx" style={imgOlxStyle} />
                    </div>

                    <div className="mt-3">
                        <div>
                            <h1>TRY THE OLX APP</h1>
                        </div>
                        <div>Buy, sell and find just about anything using the app on your mobile</div>
                    </div>
                    <div className="line" style={lineStyle}></div>

                    <div className="">
                        <div>
                            <h1>GET YOUR APP TODAY</h1>
                        </div>
                        <div>
                            <img src={appstore} className="appstore" style={appstoreStyle} />
                            <img src={appstore} className="appstore" style={appstoreStyle} />
                            <div></div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default OlxMarketing;
