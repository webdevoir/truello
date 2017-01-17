import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import merge from 'lodash/merge';

class CardCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      card: props.card
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

  componentWillReceiveProps(newProps) {
    this.setState({ card: newProps.card });
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
    this.setState({
      show: false,
      card: this.props.card
    });
  }

  close(e) {
    e.stopPropagation();
    this.hide();
  }

  update(prop) {
    return e => {
      const card = merge({}, this.state.card, {
        [prop]: e.target.value
      });
      this.setState({ card });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.card.name) {
      this.props.createCard(this.state.card).then(this.hide);
    } else {
      this.refs.name.focus();
    }
  }

  render() {
    let className, outerClassName;
    if (this.state.show) {
      outerClassName = 'card-create-form-no-hover';
      className = "flex";
    } else {
      outerClassName = 'card-create-form';
      className = "hide";
    }
    const card = this.props.card;
    return (
      <li className={outerClassName} onClick={this.show}>
        <div className="pop-up-anchor">
          <h3>Add a card...</h3>
            <div className={`create-pop-up-container ${className}`}
              ref='popUp'>
              <form onSubmit={this.handleSubmit}>
                <input type='text'
                  value={this.state.card.name} placeholder="Add a card..."
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

export default CardCreateForm;
