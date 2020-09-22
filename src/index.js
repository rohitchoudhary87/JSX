//import react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

//function based component
const App = () => {
  const buttonText = {text: 'click on me'};

  return (
    <div>
      <label className="label" htmlFor="name">Enter Name</label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        {buttonText.text}
      </button>
    </div>
  );
};

//showing component to the user using react-dom
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);