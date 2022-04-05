import React from "react";
import  Row from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <Container>
      <Row xxl="1">
        <Col sm="12" className="text-center py-3">
          <h1>StickMan</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
