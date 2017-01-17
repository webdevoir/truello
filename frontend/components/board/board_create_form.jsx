import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import merge from 'lodash/merge';

class BoardCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      board: { name: '' }
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.close = this.close.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click',
      this.hide, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click',
    this.hide, true);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ board: newProps.board });
  }

  show(e) {
    e.stopPropagation();
    this.setState({ show: true });
  }

  hide() {
    this.setState({ show: false, board: { name: '' } });
  }

  close(e) {
    e.stopPropagation();
    this.hide();
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
    if (this.state.board.name) {
      this.props.createBoard(this.state.board)
        .then(this.hide.bind(this, e));
    } else {
      this.refs.name.focus();
    }
  }

  render() {
    let outerClassName, className;
    if (this.state.show) {
      outerClassName = "create-board-box-no-hover";
      className = "flex";
      this.refs.name.focus();
    } else {
      outerClassName = "create-board-box";
      className = "hide";
    }
    return (
      <li className={`board-box ${outerClassName}`}
        onClick={this.show}>
        <span>Create a new board...</span>
        <div className={`create-pop-up-container ${className}`} ref='popUp'>
          <div className='create-pop-up-header'>
            <button type="button" className="close-button"
              onClick={this.close}>X</button>
            <h3>Create Board</h3>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label
              htmlFor="form-board-name">Name</label>
            <input id="form-board-name" type='text'
              value={this.state.board.name}
              onChange={this.update('name')} ref="name" />
            <button
              className='small-btn green-btn'>Create</button>
          </form>
        </div>
      </li>
    );
  }

}

export default BoardCreateForm;
