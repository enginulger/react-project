
import React from 'react'
import { Container } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

function Topbar() {
    return (
        <Container className="toptools my-2 d-flex justify-content-between align-items-center">
            <nav className="tools gap-1 d-flex justify-content-between flex-wrap">
                <a href="mailto:example@gmail.com" className="pe-3">
                    <FaEnvelope size={14} />
                    <span className="ps-2">example@gmail.com</span>
                </a>
                <a href="tel:+90 (507) 759 98 06">
                    <FaPhoneAlt size={14} />
                    <span className="ps-2">+90 (507) 759 98 06</span>
                </a>
            </nav>

            <div className="d-none d-sm-block">
                <nav className="tools gap-3 pe-3 d-flex justify-content-between">
                    <a href="asda">
                        <FaInstagram size={15} />
                    </a>
                    <a href="asda">
                        <FaTwitter size={15} />
                    </a>
                    <a href="asda">
                        <FaFacebook size={15} />
                    </a>
                    <a href="adasd">
                        <FaLinkedin size={15} />
                    </a>
                    <a href="ad">
                        <FaYoutube size={15} />
                    </a>
                </nav>
            </div>
        </Container>


    );
}
export default Topbar;
