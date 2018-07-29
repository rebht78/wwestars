import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
                <div>
                    <Card />
                    <Card />
                </div>
                , document.getElementById('root'));
registerServiceWorker();
