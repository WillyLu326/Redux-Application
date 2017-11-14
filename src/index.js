import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Reducer from './../src/store/reducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(Reducer);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
