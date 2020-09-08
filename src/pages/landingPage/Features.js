import React, { Component } from "react";
import "../../style/Features.css";
import "../../style/Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";
import { connect } from "react-redux";

export class Features extends Component {
  render() {
    const { allFeature } = this.props;
    return (
      <div>
        <Container>
          {allFeature.map((data) => (
            <Row>
              <Col className="description">
                <h1>{data.feature_name}</h1>
                <p>{data.feature_description}</p>
              </Col>
              <Col>
                <img src={data.feature_image} alt="fitur chat" />
              </Col>
            </Row>
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allFeature: state.rGetDataFeature.Feature.allFeature,
  };
};

export default connect(mapStateToProps)(Features);
