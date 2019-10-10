import React from 'react'
import ReactDOM from 'react-dom'

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleString()}.</h2>
    </div>
  )

  ReactDOM.render(element, document.getElementById('root'))
}
// let t1 = setInterval(tick, 1000)


function Welcome(props) {
  return (
    <h1>Hello, {props.name}</h1>
  )
}

class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

function Comment1(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )

  function formatDate() {
    /* TODO */ 
  }
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}

function Comment2(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )

  function formatDate() {
    /** TODO */
  }
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user}/>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Comment3(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )

  function formatDate() {
    /* TODO */ 
  }
}

function App(props) {
  return (
    <div>
      <Welcome name="Welcome!"/>
      <WelcomeClass name="WelcomeClass!" />
    </div>
  )
}

export default  {
  App,
  Welcome,
  WelcomeClass
}