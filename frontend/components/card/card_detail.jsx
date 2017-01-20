import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import merge from 'lodash/merge';
import CardCommentFormContainer from './card_comment_form_container';
import CardCommentIndexContainer from './card_comment_index_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : '5px',
    width                 : '750px',
    maxHeight             : '500px',
    border                : '1px solid #868c85',
    boxShadow             : '0 2px #868c85'
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
    this.deleteCard = this.deleteCard.bind(this);
    this.createListOptions = this.createListOptions.bind(this);
    this.showDueDate = this.showDueDate.bind(this);
  }

  componentDidMount() {
    this.props.fetchCard(this.props.params.cardId)
      .fail(() => this.props.router.push('/boards'));
  }

  componentWillReceiveProps(newProps) {
    this.setState({ card: newProps.card });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.refs.name.focus();
  }

  closeModal() {
    const boardId = this.props.params.boardId;
    this.setState({modalIsOpen: false});
    this.props.router.push(`/boards/${boardId}`);
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
      this.props.updateCard(this.state.card).then(this.closeModal);
    } else {
      this.refs.name.focus();
    }
  }

  deleteCard() {
    this.props.deleteCard(this.state.card.id).then(this.closeModal);
  }

  createListOptions() {
    const cardListId = this.props.card.list_id;
    const listOptions = this.props.lists.map(list => (
      <option key={list.id} value={list.id}>
        {list.name}
      </option>
    ));
    return (
      <div>
        <label className="list-label"
          htmlFor="form-card-lists">Move to List</label>
        <select id="form-card-lists" value={this.state.card.list_id}
          onChange={this.update('list_id')}>
          {listOptions}
        </select>
      </div>
    );
  }

  showDueDate() {
    return (
      <div>
        <label htmlFor="form-date">Due Date</label>
        <input id="form-date" className="form-date"
          type="date" value={this.state.card.due_date || ""}
          onChange={this.update('due_date')} />
      </div>
    );
  }

  render() {
    return (
      <div onClick={this.openModal}>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel=""
        >
          <div className='modal-content'>
            <div className='modal-header'>
              <i className="fa fa-times close-modal-button"
                onClick={this.closeModal}></i>
              <h3>Card Details</h3>
            </div>
            <div className="card-details-content">
              <div>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="form-card-name">Name</label>
                  <input id="form-card-name" type='text'
                    className="form-card-name" ref="name"
                    value={this.state.card.name}
                    onChange={this.update('name')} />
                  <label htmlFor="form-card-desc">Description</label>
                  <textarea rows="5" id="form-card-desc"
                    className="form-card-desc"
                    onChange={this.update('description')}
                    value={this.state.card.description}
                    placeholder="Add description..." />
                  {this.showDueDate()}
                  {this.createListOptions()}
                  <div className="btn-group">
                    <button
                      className='small-btn green-btn'>Edit Card</button>
                    <button type="button" className='small-btn red-btn'
                      onClick={this.deleteCard}>Delete Card</button>
                  </div>
                </form>
              </div>
              <div className="comments-section">
                <CardCommentFormContainer cardId={this.props.params.cardId} />
                <CardCommentIndexContainer cardId={this.props.params.cardId} />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(CardDetail);
