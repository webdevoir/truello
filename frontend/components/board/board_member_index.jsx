import React, { Component } from 'react';

const deleteIcon = (member, boardId, currentUserId, deleteMember) => {
  if (member.id !== currentUserId) {
    return <i title={`Remove ${member.username}`}
      className="fa fa-times delete"
      onClick={() => deleteMember(boardId, member.id)}
      ></i>;
  }
};

const BoardMemberIndex = ({ members, deleteMember, boardId,
  currentUserId }) => (
  <div>
    <h2>Members</h2>
    <ul className="user-icon-list">
      {members.map(member => (
        <li key={member.id}>
          <div className="user-icon" title={member.username}>
            <div className="user-initial"
              >{member.username.slice(0, 1).toUpperCase()}</div>
              {deleteIcon(member, boardId, currentUserId, deleteMember)}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default BoardMemberIndex;
