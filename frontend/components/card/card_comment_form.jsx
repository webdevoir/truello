import React, { Component } from 'react';

class CardCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.comment);
  }

  update(prop) {
    return e => this.setState({ [prop]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text) {
      this.props.createComment(this.state)
        .then(() => this.setState(this.props.comment));
    } else {
      this.refs.text.focus();
    }
  }

  render() {
    return (
      <div>
        <h4>Add Comment</h4>
        <form onSubmit={this.handleSubmit}>
          <textarea rows="3" value={this.state.text}
            className="form-card-comment"
            onChange={this.update('text')} ref="text" />
          <button className="small-btn gray-btn">Send</button>
        </form>
      </div>
    );
  }
}

export default CardCommentForm;
