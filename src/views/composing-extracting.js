import React from "react";

function Welcome({ username }) {
  return <h1>Hello, {username}</h1>;
}

function ComposingExtracting({name, avatarUrl}) {
  return (
    <>
      <div className="UserInfo">
        <img className="Avatar" src={avatarUrl} alt={name} />
        <div className="UserInfo-name">{name}</div>
      </div>

      <div>
        <Welcome username="Fadlan" />
      </div>
    </>
  );
}

export default ComposingExtracting;
