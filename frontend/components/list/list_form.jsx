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

class ListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      list: props.list
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.state.list = newProps.list;
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.refs.name.focus();
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
    this.props.action(this.state.list).then(this.closeModal);
  }

  deleteList() {
    this.props.deleteList(this.props.list.id);
  }

  render() {
    const formType = this.props.formType;
    const title = formType === 'new' ? 'Create List' : 'Update List';
    const text = formType === 'new' ? 'Add a list...' : '';
    const submitText = formType === 'new' ? 'Create' : 'Update';
    let deleteButton;
    if (formType === 'edit') {
      deleteButton = <button type="button"
        className='small-btn red-btn'
        onClick={this.deleteList}
        >Delete</button>;
    }
    return (
      <div className="list-index-item list-form" onClick={this.openModal}>
        <h3>{text}</h3>
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
              <h3>{title}</h3>
            </div>
            <form onSubmit={this.handleSubmit}>
              <label className="modal-form-label"
                htmlFor="form-board-name">Name</label>
              <input id="form-board-name" type='text'
                className="form-board-name" ref="name"
                value={this.state.list.name}
                onChange={this.update('name')} required />
              <button
                className='small-btn green-btn'>{submitText}</button>
              {deleteButton}
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ListForm;
