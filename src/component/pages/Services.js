import React from "react";
import "../../style/Services.css";
import { Container, Row, Col } from "react-bootstrap";
import FiturChat from "../../image/undraw_chatting_2yvo(1).svg";
import SearchPeople from "../../image/undraw_people_search_wctu.svg";

function Services() {
  return (
    <>
      <Container>
        <Row>
          <Col className="description">
            <h1>Fitur chatting</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              voluptatem eaque autem ea mollitia facere quas et provident ipsam
              eveniet sed obcaecati, quibusdam sit nisi atque magnam perferendis
              maiores ducimus.
            </p>
          </Col>
          <Col>
            <img src={FiturChat} alt="fitur chat" />
          </Col>
        </Row>
        <Row>
          <Col className="description">
            <h1>Fitur mencari lawan</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              voluptatem eaque autem ea mollitia facere quas et provident ipsam
              eveniet sed obcaecati, quibusdam sit nisi atque magnam perferendis
              maiores ducimus.
            </p>
          </Col>
          <Col>
            <img src={SearchPeople} alt="search people" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Services;
