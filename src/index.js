import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import SuperstarDashBoard from './containers/SuperstarDashBoard';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<SuperstarDashBoard />, document.getElementById('root'));
registerServiceWorker();
