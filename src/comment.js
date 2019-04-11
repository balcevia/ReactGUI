import React from "react";

function reakcja() {
  alert("Dzień Dobry");
}

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
      onClick={props.reakcja(props.author.avatarUrl)}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar author={props.author} reakcja={props.reakcja} />
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <Avatar author={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.data.toLocaleDateString()}</div>
    </div>
  );
}

export default Comment;
