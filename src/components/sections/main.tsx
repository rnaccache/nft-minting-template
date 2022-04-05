import React from "react";
import Hero from "./hero";
import Footer from "../footer/main";
import { Container } from "react-bootstrap";

function Main() {
    return(
        <Container>
            <Hero />
            <Footer />
        </Container>
    )
}

export default Main;