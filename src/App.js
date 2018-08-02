import React, {Component} from 'react';
import CardList from './CardList';
import {superstars} from './superstars';

class App extends Component
{
    render() {
        return (
            <div>
                <h1>WWE Robot SuperStars</h1>
                <CardList superstars={superstars}/>
            </div>  
        );
    }
}

export default App;