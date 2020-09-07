import React, { Component } from "react";
import "../../style/Features.css";
import "../../style/Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import FiturChat from "../../image/undraw_chatting_2yvo(1).svg";
import SearchPeople from "../../image/undraw_people_search_wctu.svg";
import Winner from "../../image/undraw_winners_ao2o.svg";
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
                <h1>{data.featureName}</h1>
                <p>{data.featureDescription}</p>
              </Col>
              <Col>
                <img src={data.featureImage} alt="fitur chat" />
              </Col>
            </Row>
          ))}

          {/* <Row>
            <Col>
              <img src={SearchPeople} alt="search people" />
            </Col>
            <Col className="description">
              <h1>Feature Find Opponent</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                voluptatem eaque autem ea mollitia facere quas et provident
                ipsam eveniet sed obcaecati, quibusdam sit nisi atque magnam
                perferendis maiores ducimus.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="description">
              <h1>Feature Rank</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                voluptatem eaque autem ea mollitia facere quas et provident
                ipsam eveniet sed obcaecati, quibusdam sit nisi atque magnam
                perferendis maiores ducimus.
              </p>
            </Col>
            <Col>
              <img src={Winner} alt="fitur rank" />
            </Col>
          </Row>
           */}
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
