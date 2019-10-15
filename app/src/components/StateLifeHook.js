import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      number: 1
    }
  }
  
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.state.number++
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div className="CLock">
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>State number is : {this.state.number} </h2>
      </div>
    )
  }
}

class ClockApp extends React.Component {
  render() {
    return (
      <div className="ClockApp">
        <Clock />
        <Clock />
        <Clock />
      </div>
    )
  }
}

export default {
  Clock,
  ClockApp
}