import React from 'react'

function NumberList(props) {
  const numbers = props.numbers
  const listItems = numbers.map( number => 
    <li key={number.toString()}>
      {number}
    </li>
  )

  return (
    <ul>{listItems}</ul>
  )
}

function NumberListApp() {
  const numbers = [1, 2, 3, 4, 5]

  return (
    <div>
      <NumberList numbers={numbers} />
    </div>
  )
}

function Blog(props) {
  const sidebar = (
    <ul>
      {
        props.posts.map( post => 
            <li key={post.id}>
              {post.title}
            </li>
          )
      }
    </ul>
  )
  const content = props.posts.map( post => (
      <div 
        key={post.id}
        id={post.id}
        title={post.title}
        >
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    )
  )

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  )
}

function BlogApp() {
  const posts = [
    {id: 1, title: 'Hello, world!', content: 'Welcome to learn React!'},
    {id: 2, title: 'Installation!', content: 'You can install React from npm!'},
  ]

  return (
    <Blog posts={posts}/>
  )
}

export default {
  NumberListApp,
  BlogApp,
}