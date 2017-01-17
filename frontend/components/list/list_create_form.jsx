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
    this.setState({ list: newProps.list });
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
                <button type="button"
                  onClick={this.close}>X</button>
              </form>
            </div>
          </div>
      </li>
    );
  }
}

export default ListCreateForm;
