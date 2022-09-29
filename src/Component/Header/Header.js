import React from 'react'
import { Container, Button } from "react-bootstrap";
import { FaRegHandPointRight } from "react-icons/fa";

import Topbar from './Topbar';
import './header.scss'

export default function Header() {
    return (
        <div className="mt-5 mb-5">
            <Container className="topbar d-flex justify-content-between align-items-center">
                <Button size="sm" className="topbar-logo rounded-0 text-center" translate="no">
                    example.com
                </Button>
                <div className=""></div>
                <Button size="sm" className="topbar-btn rounded-pill text-center">
                    <FaRegHandPointRight />
                    <span className="ps-2">Teklif Alın</span>
                </Button>
            </Container>
            <Topbar />
        </div>

    )
}
