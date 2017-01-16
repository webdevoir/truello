import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import merge from 'lodash/merge';

class BoardCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      board: props.board
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click',
      this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click',
    this.handleClickOutside, true);
  }

  componentWillReceiveProps(newProps) {
    this.state.board = newProps.board;
  }

  handleClickOutside(event) {
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(event.target)) {
        this.hide();
    }
  }

  show() {
    this.refs.popUp.style.display = 'flex';
    this.setState({show: true});
  }

  hide() {
    this.refs.popUp.style.display = 'none';
    this.setState({show: false});
  }

  update(prop) {
    return e => {
      const board = merge({}, this.state.board, {
        [prop]: e.target.value
      });
      this.setState({ board });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBoard(this.state.board).then(this.hide);
  }

  render() {
    return (
      <li className="board-box create-board-box" onClick={this.show}>
        <span>Create a new board...</span>
        <div className='create-pop-up-container' ref='popUp'>
          <div className='create-pop-up-header'>
            <button className="close-button"
              onClick={() => this.hide()}>X</button>
            <h3>Create Board</h3>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label
              htmlFor="form-board-name">Name</label>
            <input id="form-board-name" type='text'
              value={this.state.board.name}
              onChange={this.update('name')} required />
            <button
              className='small-btn green-btn'>Create</button>
          </form>
        </div>
      </li>
    );
  }

}

export default BoardCreateForm;
