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
    this.setState({ list: newProps.list });
  }

  handleClickOutside(event) {
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(event.target)) {
        this.hide();
    }
  }

  show(e) {
    e.stopPropagation();
    this.setState({show: true}, () => this.refs.name.focus());
  }

  hide() {
    this.setState({show: false, list: this.props.list});
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
    if (this.state.list.name) {
      this.props.updateList(this.state.list).then(this.hide);
    } else {
      this.refs.name.focus();
    }
  }

  deleteList() {
    this.props.deleteList(this.props.list.id);
  }

  render() {
    const list = this.props.list;
    let className;
    if (this.state.show) {
      className = 'flex';
    } else {
      className = 'hide';
    }
    return (
      <div className="pop-up-anchor">
        <div>
          <h3>{list.name}</h3>
          <span className="header-right">
            <i className="fa fa-ellipsis-h" onClick={this.show}></i>
          </span>
        </div>
        <div className={`update-pop-up-container ${className}`} ref='popUp'>
            <div className='update-pop-up-header'>
              <button className="close-button"
                onClick={this.hide}>X</button>
              <h3>Update List</h3>
            </div>
            <form onSubmit={this.handleSubmit}>
              <label
                htmlFor={`form-list-name-${list.id}`}>Name</label>
              <input id={`form-list-name-${list.id}`} type='text'
                value={this.state.list.name}
                onChange={this.update('name')}
                ref="name" />
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
