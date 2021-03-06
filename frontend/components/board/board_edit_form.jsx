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

  handleClickOutside(event) {
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(event.target)) {
        this.hide();
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ board: newProps.board });
  }

  show(e) {
    e.stopPropagation();
    this.setState({show: true}, () => this.refs.name.focus());
  }

  hide() {
    this.setState({show: false, board: this.props.board});
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
            <i className="fa fa-times close-button"
              onClick={this.close}></i>
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
