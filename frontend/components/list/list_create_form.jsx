import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import merge from 'lodash/merge';

class ListCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      list: props.list
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.close = this.close.bind(this);
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

  handleClickOutside(event) {
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(event.target)) {
        this.hide();
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ list: newProps.list });
  }

  show(e) {
    e.stopPropagation();
    this.setState({show: true}, () => this.refs.name.focus());
  }

  hide() {
    this.setState({
      show: false,
      list: this.props.list
    });
  }

  close(e) {
    e.stopPropagation();
    this.hide();
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
      this.props.createList(this.state.list).then(this.hide);
    } else {
      this.refs.name.focus();
    }
  }

  render() {
    const list = this.props.list;
    let outerClassName, className;
    if (this.state.show) {
      outerClassName = 'list-create-form-no-hover';
      className = 'flex';
    } else {
      outerClassName = 'list-create-form';
      className = 'hide';
    }
    return (
      <li className={`list-index-item ${outerClassName}`}
        onClick={this.show}>
        <div className="pop-up-anchor">
          <h3>Add a list...</h3>
            <div className={`create-pop-up-container ${className}`} ref='popUp'>
              <form onSubmit={this.handleSubmit}>
                <input id='form-list-name' type='text'
                  value={this.state.list.name} placeholder="Add a list..."
                  onChange={this.update('name')} ref="name" />
                <button
                  className='small-btn green-btn'>Save</button>
                <i className="fa fa-times close-button"
                  onClick={this.close}></i>
              </form>
            </div>
          </div>
      </li>
    );
  }
}

export default ListCreateForm;
