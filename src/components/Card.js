import React, {Component} from 'react';
import ActionButton from './ActionButton';
import './Card.css';

class Card extends Component {

    render() {
        return (
            <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
                    <div className="deletediv">
                        <ActionButton btnText="X"/>
                    </div>    
                    <div>
                        <img src={this.props.pic} alt='Superstar'/>
                        <div>
                            <h2>{this.props.name}</h2>
                            <p>{this.props.email}</p>
                        </div>
                    </div>
                    <ActionButton btnText="Vote Now!" clickhandler={this.increaseVote}/>
                    <h2>Votes: {this.props.votes}</h2>
            </div>
        
        );
    }
    
    increaseVote = (event) => {
        this.props.clickhandler(this.props.id);
    };
}

export default Card;