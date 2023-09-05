import React from "react";

const Footer = () => {
    const footerStyle = {
        width: "100%",
        backgroundColor: "#ebeeef",
        color: "#84bedd",
        padding: "20px 0",
    };

    const containerStyle = {
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
    };

    const columnStyle = {
        flexBasis: "25%",
        marginBottom: "20px",
    };

    const linkStyle = {
        color: "#66829d",
        textDecoration: "none",
        display: "block",
        marginBottom: "10px",
    };

    const appStoreStyle = {
        display: "flex",
    };

    const appIconStyle = {
        marginRight: "10px",
        height: "40px",
    };

    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <div style={columnStyle}>
                    <h4>Company</h4>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li><a href="#" style={linkStyle}>About OLX</a></li>
                        <li><a href="#" style={linkStyle}>OLX Blog</a></li>
                        <li><a href="#" style={linkStyle}>Contact Us</a></li>
                        <li><a href="#" style={linkStyle}>OLX for Businesses</a></li>
                    </ul>
                </div>
                <div style={columnStyle}>
                    <h4>OLX</h4>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li><a href="#" style={linkStyle}>Help</a></li>
                        <li><a href="#" style={linkStyle}>Sitemap</a></li>
                        <li><a href="#" style={linkStyle}>Legal & Privacy Information</a></li>
                    </ul>
                </div>
                <div style={columnStyle}>
                    <h4>Follow Us</h4>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li><a href="#" style={linkStyle}>Facebook</a></li>
                        <li><a href="#" style={linkStyle}>Twitter</a></li>
                        <li><a href="#" style={linkStyle}>YouTube</a></li>
                    </ul>
                </div>
                <div style={columnStyle}>
                    <h4>Download Our App</h4>
                    <div style={appStoreStyle}>
                        <a href="https://www.apple.com/app-store/">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZiDnMLKGCgJT0qbEOrDSoi2JOjC6889-mQ&usqp=CAU"
                                alt="App Store"
                                style={appIconStyle}
                            />
                        </a>
                        <a href="https://play.google.com/store/games?pli=1">
                            <img
                                src="data:image/png;base64,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"
                                alt="Google Play"
                                style={appIconStyle}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};



export default Footer;
