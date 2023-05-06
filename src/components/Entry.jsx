import React from "react";
// it is a additional file where we have to describe the structure of component

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji">{props.emoji}</span>
        <span className="name">{props.name}</span>
      </dt>
      <dd>
        <span className="description">{props.description}</span>
      </dd>
    </div>
  );
}

export default Entry;
