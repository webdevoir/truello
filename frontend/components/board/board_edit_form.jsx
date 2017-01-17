import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import merge from 'lodash/merge';

class BoardEditForm extends Component {
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
    this.close = this.close.bind(this);
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
    this.setState({show: true});
  }

  hide() {
    this.setState({show: false});
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
      this.props.updateBoard(this.state.board).then(this.hide);
    } else {
      this.refs.name.focus();
    }
  }

  render() {
    let className;
    if (this.state.show) {
      className = 'flex';
    } else {
      className = 'hide';
    }
    return (
      <div className='board-detail-header-container' onClick={this.show}>
        <h1 className='board-detail-header'>{this.props.board.name}</h1>
        <div className={`update-pop-up-container ${className}`} ref='popUp'>
          <div className='update-pop-up-header'>
            <button className="close-button"
              onClick={this.close}>X</button>
            <h3>Rename Board</h3>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label
              htmlFor="form-board-name">Name</label>
            <input id="form-board-name" type='text'
              ref="name"
              value={this.state.board.name}
              onChange={this.update('name')} />
            <button
              className='small-btn green-btn'>Update</button>
          </form>
        </div>
      </div>
    );
  }

}

export default BoardEditForm;
