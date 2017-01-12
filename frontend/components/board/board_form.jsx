import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : '10px'
  }
};

class BoardForm extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      board: { name: '' }
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

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  update(prop) {
    return e => this.setState({ board: {
      [prop]: e.target.value
    } });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBoard(this.state.board).then(this.closeModal);
  }

  render() {
    return (
      <li className="new-board-item" onClick={this.openModal}>
        <span>Create new board...</span>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Create Board"
        >
          <div className='modal-content'>
            <button className="close-modal-button"
              onClick={this.closeModal}>X</button>
            <h2>Create Board</h2>
            <form onSubmit={this.handleSubmit}>
              <label className="modal-form-label"
                htmlFor="form-board-name">Name</label>
              <input id="form-board-name" type='text'
                value={this.state.board.name}
                onChange={this.update('name')} />
              <button>Create</button>
            </form>
          </div>
        </Modal>
      </li>
    );
  }
}

export default BoardForm;
