import React from 'C:/Users/aziz/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import ReactDOM from 'C:/Users/aziz/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-dom';
import 'tachyons';
import App from '..containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
