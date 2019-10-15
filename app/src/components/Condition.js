import React from 'react'

function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up!</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if(isLoggedIn) {
    return <UserGreeting />
  } else {
    return <GuestGreeting />
  }
}

function GreetingApp(props) {
  // Try changing to isLoggedIn={true}
  return (
    <Greeting isLoggedIn={props.isLoggedIn} />
  )
}


// 一组 Login 相关的组件
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)

    this.state = {
      isLoggedIn: false,
    }
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn: true
    })
    console.log('login clicked')
  }

  handleLogoutClick()  {
    this.setState({
      isLoggedIn: false
    })
    console.log('logout clicked')
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button

    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}


// 逻辑运算符示例
function MailBox(props) {
  const unreadMessages = props.unreadMessages
  
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages > 0 && 
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  )
}


// 阻止组件渲染 render() 返回 null
function WarningBanner(props) {
  if(!props.warn) {
    return null
  }

  return (
    <div className="warning">
      Warning!
    </div>
  )
}

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showWarning: true
    }
  }

  handleToggleClick = () => {
    this.setState(state => ({
      showWarning: !state.showWarning
    }))
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'showWarning'}
        </button>
      </div>
    )
  }
}

export default {
  GreetingApp,
  LoginControl,
  MailBox,
  Page,
}