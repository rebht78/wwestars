import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollBar from '../components/ScrollBar';
import ActionButton from '../components/ActionButton';
import {superstars} from '../model/superstars';
import './App.css';

class App extends Component
{
    constructor() {
        super();
        this.state = {
            superstars:[],
            searchField:'',
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
            <div className="tc">
                <h1 className="heading">WWE Robot SuperStars</h1>
                <div className="operationtab">
                    <SearchBox filter={this.onInputChange}/>
                    <ActionButton clickhandler={this.onActionButtonClick} btnText="Create Robot Superstars" />
                </div>
                <ScrollBar>
                    <CardList superstars={filteredSuperStar} clickhandler={this.onVoteButtonClick}/>
                </ScrollBar>
            </div>  
        );
    }
    onVoteButtonClick = (event,value) => {
        console.log('It was clicked : '+value);
    }
    onInputChange = (event) => {
        this.setState({searchField: event.target.value});
    }
    onActionButtonClick = (event) => {
        alert("Feature coming soon!, learning how to do that ;) ");
    }
}

export default App;