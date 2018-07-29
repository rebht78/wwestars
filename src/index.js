import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
                <div>
                    <Card />
                    <Card />
                </div>
                , document.getElementById('root'));
registerServiceWorker();
