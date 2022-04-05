import React from "react";
import  Row  from "react-bootstrap/Row";
import  Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {default as Mint} from "../mint/index"

function Hero() {
    return(
        <Row xxl="1">
        <Col sm="12" className="display text-center py-3">
          <h2>Public Sale</h2>
          <h3>Mint Your Stickman</h3>
          <Image
            src="https://pbs.twimg.com/profile_images/492033509578395648/XFFzOKyr_400x400.jpeg"
            alt="Stickman Logo"
            className="logoimg py-4"
          />
          <Mint />
        </Col>
      </Row>
    )
}

export default Hero;