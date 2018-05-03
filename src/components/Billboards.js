import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';

class Billboards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    }
  }

  upvote() {
    const { votes } = this.state
    const upVote = votes + 1

    this.setState({
      votes: upVote
    })
  }

  downvote() {
    const { votes } = this.state
    const downVote = votes - 1

    this.setState({
      votes: downVote
    })
  }

  render() {
    const { votes } = this.state

    return (
      <div className="wrapper">
        <h1 className="billboard-title"><span className="billboard-word">Billboard</span> Voting</h1>
        <Container>
        <Row className="list-item">
          <Col>
            <Button onClick={() => this.upvote()}>▲</Button>
            <strong>{votes}</strong>
            <Button onClick={() => this.downvote()}>▼</Button>
            <img className="billboard-image" src={require('../images/best.jpg')} width="60%"/>
          </Col>
        </Row>
        <Row className="list-item">
          <Col>
            <img className="billboard-image" src={require('../images/lyft.webp')} width="60%"/>
          </Col>
        </Row>
        <Row className="list-item">
          <Col>
            <img className="billboard-image" src={require('../images/makers-mark.jpg')} width="60%"/>
          </Col>
        </Row>
        <Row className="list-item">
          <Col>
            <img className="billboard-image" src={require('../images/youlooked.jpg')} width="60%"/>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Billboards;
