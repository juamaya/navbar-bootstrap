import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import madre from "../assets/img/mama.jpg"
import padres from "../assets/img/padres.png"
import logo1 from "../assets/img/logo1.png"

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={madre} width={300} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={logo1} width={300} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={padres} width={300} roundedCircle />
        </Col>

      </Row>
    </Container>
  );
}

export default ShapeExample;