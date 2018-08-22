import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollBar from '../components/ScrollBar';
import ActionButton from '../components/ActionButton';
// import {superstars} from '../model/superstars';
import './SuperstarDashBoard.css';
import SuperstarForm from '../components/SuperstarForm';

class App extends Component
{
    constructor() {
        super();
        this.state = {
            superstars:[],
            searchField:'',
            disabledButton:false,
            isCreate:false
        }
    }
    componentDidMount() {
        fetch('http://localhost:3020/api/superstars', {
            headers: {
                Accept:'Application/json'
            }
        })
        .then(response => response.json())
        .then(superstars => this.setState({superstars:superstars}));
    }
    render() {
        if (this.state.isCreate) {
            return (
                <SuperstarForm title="Create Superstar" btnText="Add Superstar"/>
            );
        }
        else {
            const filteredSuperStar = this.state.superstars.filter((superstar) => {
                return superstar.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            });
            return (
                <div className="tc">
                    <h1 className="heading">WWE Robot SuperStars</h1>
                    <div className="operationtab">
                        <SearchBox filter={this.onInputChange}/>
                        <ActionButton isdisable={this.state.disabledButton} clickhandler={this.onActionButtonClick} btnText="Create Robot Superstars" />
                    </div>
                    <ScrollBar>
                        <CardList deletehandler={this.onDeleteButtonClick} superstars={filteredSuperStar} clickhandler={this.onVoteButtonClick}/>
                    </ScrollBar>
                </div>  
            );
        }
    }
    onVoteButtonClick = (value) => {
        const superstars = this.state.superstars;

        const updatedSuperStars = superstars.map((superstar) => {
            if (superstar.id === value) {
                return Object.assign({},superstar,{
                    votes:superstar.votes + 1
                });
            } else {
                return superstar;
            }
        });
        this.setState({superstars:updatedSuperStars});
    }
    onDeleteButtonClick = (value) => {
        const superstars = this.state.superstars;

        const updatedSuperStars = superstars.filter((superstar) => {
            return superstar.id !== value;
        });

        this.setState({superstars: updatedSuperStars});
    }
    onInputChange = (event) => {
        this.setState({searchField: event.target.value});
    }
    onActionButtonClick = (event) => {
        this.setState({isCreate:true});
    }
}

export default App;