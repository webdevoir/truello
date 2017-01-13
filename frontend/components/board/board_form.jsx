import React, { Component } from 'react';
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

class BoardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      board: props.board
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.state.board = newProps.board;
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
    return e => {
      const board = merge({}, this.state.board, {
        [prop]: e.target.value
      });
      this.setState({ board });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state.board).then(this.closeModal);
  }

  render() {
    const titleText = this.props.formType === 'new' ? 'Create Board' :
      'Rename Board';
    const submitText = this.props.formType === 'new' ? 'Create' :
      'Rename';
    return (
      <div className="modal-container" onClick={this.openModal}>
        {this.props.children}
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
              <h3>{titleText}</h3>
            </div>
            <form onSubmit={this.handleSubmit}>
              <label className="modal-form-label"
                htmlFor="form-board-name">Name</label>
              <input id="form-board-name" type='text'
                className="form-board-name"
                value={this.state.board.name}
                onChange={this.update('name')} required />
              <button
                className='small-btn green-btn'>{submitText}</button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default BoardForm;
