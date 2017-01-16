import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import merge from 'lodash/merge';

class ListUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      list: props.list
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteList = this.deleteList.bind(this);
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
    this.state.list = newProps.list;
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

  afterOpenModal() {
    this.refs.name.focus();
  }

  hide() {
    this.refs.popUp.style.display = 'none';
    this.setState({show: false});
  }

  update(prop) {
    return e => {
      const list = merge({}, this.state.list, {
        [prop]: e.target.value
      });
      this.setState({ list });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateList(this.state.list).then(this.hide);
  }

  deleteList() {
    this.props.deleteList(this.props.list.id);
  }

  render() {
    const list = this.props.list;
    return (
      <div>
        <h3>{list.name} <i className="fa fa-ellipsis-h"
          onClick={this.show}></i></h3>
          <div className='update-pop-up-container' ref='popUp'>
            <div className='update-pop-up-header'>
              <button className="close-button"
                onClick={() => this.hide()}>X</button>
              <h3>Update List</h3>
            </div>
            <form onSubmit={this.handleSubmit}>
              <label
                htmlFor={`form-board-name-${list.id}`}>Name</label>
              <input id={`form-board-name-${list.id}`} type='text'
                value={this.state.list.name}
                onChange={this.update('name')} required />
              <button
                className='small-btn green-btn'>Update</button>
              <button type="button" className='small-btn red-btn'
                onClick={() => this.deleteList()}>Delete</button>
            </form>
          </div>
      </div>
    );
  }
}

export default ListUpdateForm;
