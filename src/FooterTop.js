import React from 'react';
import "./Footertop.css";
import { Link } from "react-router-dom";

function FooterTop() {
    return (
        <div className="footerTop">
            <div className="footer__Heading">
                <Link to="/">
                <h5>Beck to Home</h5>
                </Link>
            </div>
            <hr />
        </div>
    );
}

export default FooterTop;
