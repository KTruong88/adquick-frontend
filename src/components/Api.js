import React, { Component } from 'react';

class ApiCall extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      value: []
    }
  }

  callApi() {
    const { value } = this.state

    fetch('http://localhost:3001/billboards')
    .then((result) => {
      return result.json()
    })
    .then((jsonResult) => {
      this.setState({
        value: jsonResult
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    const { value } = this.state
    
    return (
      <div>
        <button onClick={() => this.callApi()}>
          Click here to call API
        </button>
        <div>
          Title: { value.title } <br />
          UserId: { value.userId } <br />
          Image: { value.image }
        </div>
      </div>
    )
  }
}

export default ApiCall
