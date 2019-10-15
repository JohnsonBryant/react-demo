import React from 'react'

/**
 * 受控组件
 * 
 */


class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    console.log('提交的名字：', this.state.value)
    event.preventDefault()
  }

  handleChange(event) {
    // this.setState({
    //   value: event.target.value
    // })

    this.setState({
      value: event.target.value.toUpperCase()
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字：
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}

class NameFormApp extends React.Component {

  render() {
    return (
      <NameForm />
    )
  }
}


class EssayForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '请撰写一篇你喜欢的关于DOM的文章！'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    alert('提交的文章:' + this.state.value)
    event.preventDefault()
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          文章：
          <textarea value={this.state.value} onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}

class EssayFormApp extends React.Component {
  render() {
    return (
      <EssayForm />
    )
  }
}


class FlavorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'coconut'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    alert('你喜欢的风味是：' + this.state.value)
    event.preventDefault()
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            选择你喜欢的风味：
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}

class FlavorFormApp extends React.Component {
  render() {
    return (
      <FlavorForm />
    )
  }
}


class Reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    // ES6 计算属性名称
    this.setState({
      [name]: value
    })
    // ES5 处理方式，等同于ES6 计算属性名称方式
    // const state = Object.create(this.state)
    // state[name] = value
    // this.setState(state)
  }

  render() {
    return (
      <form>
        <label>
          参与：
          <input 
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          来宾人数：
          <input 
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleChange}
          />
        </label>
      </form>
    )
  }
}

class ReservationApp extends React.Component {
  render() {
    return (
      <Reservation />
    )
  }
}

export default {
  NameFormApp,
  EssayFormApp,
  FlavorFormApp,
  ReservationApp,
}