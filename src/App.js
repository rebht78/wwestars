import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {superstars} from './superstars';

class App extends Component
{
    render() {
        return (
            <div className='tc'>
                <h1>WWE Robot SuperStars</h1>
                <SearchBox/>
                <CardList superstars={superstars}/>
            </div>  
        );
    }
}

export default App;