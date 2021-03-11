import React from "react";
const User = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h4>Age:{props.age}</h4>
      <style jsx>
        {`
          div {
            border: 1px solid green;
            text-align: center;
            padding: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default User;
