import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-row">
                    <div className="footer-col-1">
                        <div className="footer-headling">
                            <p>ABOUT</p>
                        </div>
                        <div className="footer-list">
                            <a href="#">Contact Us</a>
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                            <a href="#">Flipkart Stories</a>
                            <a href="#">Flipkart Wholesale</a>
                            <a href="#">Corporate Information</a>
                        </div>
                    </div>

                    <div className="footer-col-2">
                        <div className="footer-headling">
                            <p>HELP</p>
                        </div>
                        <div className="footer-list">
                            <a href="#">Payments</a>
                            <a href="#">Shipping</a>
                            <a href="#">Cancellation & Returns</a>
                            <a href="#">FAQ</a>
                            <a href="#">Report Infringment</a>
                        </div>
                    </div>

                    <div className="footer-col-2">
                        <div className="footer-headling">
                            <p>POLICY</p>
                        </div>
                        <div className="footer-list">
                            <a href="#">Return Policy</a>
                            <a href="#">Terms of Use</a>
                            <a href="#">Security</a>
                            <a href="#">Privacy</a>
                            <a href="#">Sitemap</a>
                            <a href="#">Grievance Redressal</a>
                            <a href="#"> EPR Compliance</a>
                        </div>
                    </div>

                    <div className="footer-col-3">
                        <div className="footer-headling">
                            <p> SOCIAL</p>
                        </div>
                        <div className="footer-list">
                            <a href="#"> Facebook</a>
                            <a href="#"> Twitter</a>
                            <a href="#">Youtube</a>
                        </div>
                    </div>

                    <div className="footer-col-4">
                        <div className="footer-headling">
                            <p>HELP</p>
                        </div>
                        <div className="footer-list">
                            <a href="#">Payments</a>
                            <a href="#">Shipping</a>
                            <a href="#">Cancellation & Returns</a>
                            <a href="#">FAQ</a>
                            <a href="#">Report Infringment</a>
                        </div>
                    </div>

                    <div className="footer-col-5">
                        <div className="footer-headling">
                            <p> Mail Us:</p>
                        </div>
                        <div className="footer-list">
                            <p>
                                Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                                Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
                                Village, Bengaluru, 560103, Karnataka, India{" "}
                            </p>
                        </div>
                    </div>

                    <div className="footer-col-6">
                        <div className="footer-headling">
                            <p>Registered Office Address:</p>
                        </div>
                        <div className="footer-list-address">
                            <p>Flipkart Internet Private Limited,</p>
                            <p>Buildings Alyssa, Begonia &</p>
                            <p> Clove Embassy Tech Village,</p>
                            <p> Outer Ring Road, Devarabeesanahalli Village,</p>
                            <p> Bengaluru, 560103,</p>
                            <p> Karnataka, India </p>
                            <p>CIN : U51109KA2012PTC066107</p>
                            <p>
                                Telephone: <span>044-45614700</span>{" "}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer-row2">
                    <div className="footer-row2-col">
                        <p>Sell On Flipkart</p>
                    </div>
                    <div className="footer-row2-col">
                        <p>Advertise</p>
                    </div>
                    <div className="footer-row2-col">
                        <p>Gift Cards</p>
                    </div>
                    <div className="footer-row2-col">
                        <p>Help Center</p>
                    </div>
                    <div className="footer-row2-col">
                        <p>© 2021 Flipkart Clone. All Rights Reserved.</p>
                    </div>
                    <div className="footer-row2-col">
                        <img src="./src/payment.png" alt="payment" />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
