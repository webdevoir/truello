import React, { Component } from 'react';

const BoardMemberIndex = ({ members }) => (
  <div>
    <h2>Members</h2>
    <ul className="user-icon-list">
      {members.map(member => (
        <li key={member.id}>
          <div className="user-icon" title={member.username}>
            <div>{member.username.slice(0, 1).toUpperCase()}</div>
              <i title={`Remove ${member.username}`}
                className="fa fa-times"
                ></i>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default BoardMemberIndex;
