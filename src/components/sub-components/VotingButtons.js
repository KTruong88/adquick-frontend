import React, { Component } from 'react'
import { Button, Row, Modal } from 'react-bootstrap'

class VotingButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  upVote() {
    const { count } = this.state
    const upVote = count + 1

    this.setState({
      count: upVote
    })
    this.message()
  }

  downVote() {
    const { count } = this.state
    const downVote = count - 1

    this.setState({
      count: downVote
    })
    this.message()
  }

  message() {
    alert("We have received your vote. Thank you!")
  }

  render() {
    const { count } = this.state

    return (
      <Row className="votes">
        <Button bsStyle="success" onClick={() => this.upVote()}>▲</Button>
        <strong className="count">{count}</strong>
        <Button bsStyle="danger" onClick={() => this.downVote()}>▼</Button>
      </Row>
    )
  }
}

export default VotingButtons
