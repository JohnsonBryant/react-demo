import React from 'react'

// 使用组件的 props.children
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

// FancyBorder JSX 标签中的所有内容都会作为一个 children prop 传递给 FancyBorder 组件。
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  )
}

// 不使用 props.children ，自行约定，将所需内容传入 props，并使用相应的 prop
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  )
}
function Contacts() {
  return <div>left pane: Contacts</div>
}
function Chat() {
  return <div>right pane: Chat</div>
}
function SplitPaneApp() {
  return (
    <SplitPane
      left={<Contacts />}
      right={<Chat />}
    />
  )
}


// 特殊组件通过 props  定制渲染一般组件
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  )
}
function WelcomeDialog1() {
  return (
    <div>
      <Dialog 
        title="Welcome"
        message="Thank you for visiting our spacecraft!"
      />
      <Dialog 
        title="GoodBye"
        message="Bye bye!"
      />
    </div>
  )
}


// 组合适用于 class 形式定义的组件
function Dialog1(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  )
}
class SignUpDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <Dialog1 
        title="Mars Explloration Program"
        message="How should we refer to you ?"
      >
        <input 
          value={this.state.login}
          onChange={this.handleChange}
        />

        <button onClick={this.handleClick}>
          Sign Me Up!
        </button>
      </Dialog1>
    )
  }

  handleChange(e) {
    this.setState({login: e.target.value})
  }

  handleClick(e) {
    alert(`Welcome aboard, ${this.state.login}!`)
  }
}


export default {
  WelcomeDialog,
  WelcomeDialog1,
  SplitPaneApp,
  SignUpDialog,
}