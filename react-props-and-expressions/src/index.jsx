import React from 'react';
import * as ReactDOM from 'react-dom';

function CustomButton(props) {
  return (
    <button>{props.text}</button>
  );
}

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
