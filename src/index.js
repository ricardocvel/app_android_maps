import React from 'react';  //toda vez que eu uso Html no javascript
import ReactDOM from 'react-dom';  // da a possibilidade do react se comunicar com a arvore de elementos ( dom para browser)
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


//jsx (javascript + html)