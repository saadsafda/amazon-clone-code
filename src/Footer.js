import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";

function footer() {
    return (
        <div className="Footer">
            <div className="footer__Tables">
                <div className="footer__Headings">
                    <div className="footer__Lists">
                    <table>
                    <tr>
                        <th>Get to Know Us</th>
                        <th>Make Money with Us</th>
                        <th>Amazon Payment Products</th>
                        <th>Let Us Help You</th>
                    </tr>
                    <tr>
                        <td>Careers</td>
                        <td>Sell products on Amazon</td>
                        <td>Amazon Business Card</td>
                        <td>Amazon and COVID-19</td>
                    </tr>
                    <tr>
                        <td>Blog</td>
                        <td>Sell apps on Amazon</td>
                        <td>Shop with Points</td>
                        <td>Your Account</td>
                    </tr>
                    <tr>
                        <td>About Amazon</td>
                        <td>Become an Affiliate</td>
                        <td>Reload Your Balance</td>
                        <td>Your Orders</td>
                    </tr>
                    <tr>
                        <td>Investor Relations</td>
                        <td>Advertise Your Products</td>
                        <td>Amazon Currency Converter</td>
                        <td>Shipping Rates & Policies</td>
                    </tr>
                    <tr>
                        <td>Amazon Devices</td>
                        <td>Self-Publish with Us</td>
                        <td></td>
                        <td>Returns & Replacements</td>
                    </tr>
                    <tr>
                        <td>Amazon Tours</td>
                        <td>Host an Amazon Hub</td>
                        <td></td>
                        <td>Manage Your Content and Devices</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>›See More Make Money with Us</td>
                        <td></td>
                        <td>Amazon Assistant</td>
                    </tr>
                    </table>
                    </div>
                </div>
            </div>
            <div className="Last__footer">
                <p>
                    <a href="https://www.amazon.com/gp/help/customer/display.html?ie=UTF8&nodeId=508088&ref_=footer_cou">
                Conditions of Use  
                </a>&nbsp; &nbsp;
                <a href=""> 
                Privacy Notice 
                </a>&nbsp; &nbsp;
                <a href="">
                Interest-Based Ads 
                </a>&nbsp; &nbsp;
                © 1996-2020, Amazon.com, Inc. or its affiliates
                </p>
            </div>
        </div>
    );
}

export default footer;
