import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Reducer from './../src/store/reducer';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(Reducer);

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
