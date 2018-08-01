import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList';
import 'tachyons';
import {superstars} from './superstars';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
                <div>
                   <CardList superstars={superstars}/>
                </div>
                , document.getElementById('root'));
registerServiceWorker();
