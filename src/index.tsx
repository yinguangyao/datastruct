import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import List from './chainlist/List'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
const list = new List(6);
list.init([1, 2, 3, 4, 5, 6]);
console.log(list);
list.insert(5, 7);
list.delete(3);

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
