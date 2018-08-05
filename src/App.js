import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {superstars} from './superstars';
import './App.css';

class App extends Component
{
    constructor() {
        super();
        this.state = {
            superstars:superstars,
            searchField:''
        }
    }
    render() {
        const filteredSuperStar = this.state.superstars.filter((superstar) => {
            return superstar.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className="heading">WWE Robot SuperStars</h1>
                <SearchBox className="searchbox" filter={this.onInputChange}/>
                <CardList superstars={filteredSuperStar}/>
            </div>  
        );
    }
    onInputChange = (event) => {
        this.setState({searchField: event.target.value});
    }
}

export default App;