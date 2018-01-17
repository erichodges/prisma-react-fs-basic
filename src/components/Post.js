import React from 'react'
import { Link } from 'react-router-dom'

export default class Post extends React.Component {
  render() {
    let title = this.props.post.title
    if (this.props.isDraft) {
      title = `${title} (Draft)`
    }

    return (
      <Link className='no-underline ma1' to={`/post/${this.props.post.id}`}>
        <h2 className='f3 black-80 fw4 lh-solid'>{this.props.post.text}</h2>
        <p className='black-80 fw3'>{title}</p>
      </Link>
    )
  }
}
