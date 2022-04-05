import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Footer() {
  return (
    <Row xxl="1">
      <Col sm="12" className="text-center py-3">
        <hr />
        <h3>© 2022 StickMan Productions | Terms of Use</h3>
      </Col>
    </Row>
  );
}

export default Footer;
