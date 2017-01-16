import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import merge from 'lodash/merge';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : '5px',
    width                 : '250px'
  }
};

class CardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
      card: props.card
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount() {
    this.props.fetchCard(this.props.params.cardId);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.refs.name.focus();
  }

  closeModal() {
    const boardId = this.props.params.boardId;
    this.setState({modalIsOpen: false},
      this.props.router.push(`/boards/${boardId}`));
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
    this.props.updateCard(this.state.card).then(this.closeModal);
    // this.props.action(this.state.list).then(this.closeModal);
  }

  render() {
    return (
      <div className="list-index-item list-form" onClick={this.openModal}>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel=""
        >
          <div className='modal-content'>
            <div className='modal-header'>
              <button className="close-modal-button"
                onClick={this.closeModal}>X</button>
              <h3>Card Detail</h3>
            </div>
            <form onSubmit={this.handleSubmit}>
              <label className="modal-form-label"
                htmlFor="form-board-name">Name</label>
              <input id="form-board-name" type='text'
                className="form-board-name" ref="name"
                value={this.state.card.name}
                onChange={this.update('name')} required />
              <button
                className='small-btn green-btn'>Submit</button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(CardDetail);
