import React, { Component } from 'react';

const BoardMemberIndex = ({ members }) => (
  <div>
    <h2>Members</h2>
    <ul className="user-icon-list">
      {members.map(member => (
        <li key={member.id}>
          <div className="user-icon" title={member.username}>
            {member.username.slice(0, 1).toUpperCase()}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default BoardMemberIndex;
