import React from 'react';

function Welcome(props) {
  return (
    <div>
      welcome /\{props.name +' '+ props.lastName}/\ from function component.
      <p>{props.children}</p>
    </div>
  )
}

export default Welcome;
