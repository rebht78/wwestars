import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollBar from '../components/ScrollBar';
import {superstars} from '../model/superstars';
import './App.css';

class App extends Component
{
    constructor() {
        super();
        this.state = {
            superstars:[],
            searchField:''
        }
    }
    componentDidMount() {
        this.setState({superstars:superstars});
    }
    render() {
        const filteredSuperStar = this.state.superstars.filter((superstar) => {
            return superstar.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className="heading">WWE Robot SuperStars</h1>
                <SearchBox className="searchbox" filter={this.onInputChange}/>
                <ScrollBar>
                    <CardList superstars={filteredSuperStar}/>
                </ScrollBar>
            </div>  
        );
    }
    onInputChange = (event) => {
        this.setState({searchField: event.target.value});
    }
}

export default App;