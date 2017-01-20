import React, { Component } from 'react';

class CardCommentIndex extends Component {
  constructor() {
    super();
    this.comments = this.comments.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.cardId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.cardId !== newProps.cardId) {
      this.props.fetchComments(newProps.cardId);
    }


  }

  componentWillUnmount() {
    this.props.clearComments();
  }

  comments() {
    return this.props.comments.map(comment => {
      var obj;
      if (this.props.currentUserId === comment.author_id
        || this.props.currentUserId === this.props.board.owner_id) {
        obj = <a onClick={() => this.props.deleteComment(comment.id)}>
          Delete</a>;
      }
      return (
        <li key={comment.id} className="comment-item">
          <div className="user-icon">
            {comment.author.slice(0,1).toUpperCase()}
          </div>
          <div className="comment-content">
            <h5>{comment.author}</h5>
            <p>{comment.text}</p>
            {obj}
          </div>
        </li>
      );
    });
  }

  render() {
    const comments = this.props.comments;
    if (comments && comments.length) {
      return (
        <div className="comment-index">
          <h4>Comments</h4>
          <ul>
            {this.comments()}
          </ul>
        </div>
      );
    }
    return null;
  }
}

export default CardCommentIndex;
