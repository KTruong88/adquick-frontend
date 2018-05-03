import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

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
  }

  downVote() {
    const { count } = this.state
    const downVote = count - 1

    this.setState({
      count: downVote
    })
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <Button bsStyle="success" onClick={() => this.upVote()}>▲</Button>
        <strong className="count">{count}</strong>
        <Button bsStyle="danger" onClick={() => this.downVote()}>▼</Button>
      </div>
    )
  }
}

export default VotingButtons
