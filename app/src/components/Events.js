import React from 'react'

function ActionLink() {
  function handleClick(e) {
    e.preventDefault()
    console.log('The link was clicked.')
  }

  return (
    <a href="https://cn.bing.com" onClick={handleClick}>
      Click me
    </a>
  )
}

function ActionLinkApp() {
  return (
    <div className="ActionLinkApp">
      <ActionLink />
    </div>
  )
}

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true
    }

    // 为了在回调函数中使用 this， 这个绑定必不可少
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
    console.log(this)
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

class ToggleApp extends React.Component {
  render() {
    return (
      <div className="ToggleApp">
        <Toggle />
      </div>
    )
  }
}

export default {
  ActionLinkApp,
  ToggleApp
}