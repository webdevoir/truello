import React, { Component } from 'react';
import { withRouter } from 'react-router';

class BoardMemberSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { query: props.query, start: false };
    this.update = this.update.bind(this);
    this.addMember = this.addMember.bind(this);
    this.showSearchMembers = this.showSearchMembers.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSearchMembers();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.boardId !== newProps.params.boardId) {
      this.props.clearSearchMembers();
      this.setState({ start: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.props.fetchSearchMembers(this.props.params.boardId,
        this.state.query);
    }
  }

  update(e) {
    this.setState({ query: e.target.value, start: true });
  }

  addMember(member, event) {
    if (event) {
      event.target.classList.add("hide");
    }
    this.props.addMember(this.props.params.boardId, member);
  }

  showSearchMembers() {
    const searchMembers = this.props.searchMembers;
    if (searchMembers && searchMembers.length > 0) {
      return searchMembers.map(member => (
        <li key={member.id} className="search-member"
          onClick={this.addMember.bind(this, member)}>
          {member.username}</li>
      ));
    } else if (this.state.start && this.state.query) {
      return <li className="no-results">No results...</li>;
    }
  }

  render() {
    return (
      <div>
        <h2>Add Members</h2>
        <input type='text' value={this.state.query}
          onChange={this.update} placeholder="Add a member..." />
        <ul>
          {
            this.showSearchMembers()
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(BoardMemberSearch);
