import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import VotingButtons from './sub-components/VotingButtons'

class Billboards extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="billboard-title"><span className="billboard-word">Billboard</span> Voting</h1>
        <Container>

            <VotingButtons />
            <Row className="list-item">
              <Col>
                <h3>Rank 1 #ProbablyTheBest</h3>
                <img className="billboard-image" src={require('../images/best.jpg')} width="60%"/>
              </Col>
            </Row>

            <VotingButtons />
            <Row className="list-item">
              <Col>
                <h3>Rank 2 #Lyft</h3>
                <img className="billboard-image" src={require('../images/lyft.webp')} width="60%"/>
              </Col>
            </Row>

            <VotingButtons />
            <Row className="list-item">
              <Col>
                <h3>Rank 3 #WhiskeyMaker</h3>
                <img className="billboard-image" src={require('../images/makers-mark.jpg')} width="60%"/>
              </Col>
            </Row>

            <VotingButtons />
            <Row className="list-item">
              <Col>
                <h3>Rank 4 #YouLooked</h3>
                <img className="billboard-image" src={require('../images/youlooked.jpg')} width="60%"/>
              </Col>
            </Row>

        </Container>
      </div>
    );
  }
}

export default Billboards;
