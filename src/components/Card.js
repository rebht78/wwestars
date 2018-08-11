import React, {Component} from 'react';
import ActionButton from './ActionButton';

class Card extends Component {

    render() {
        return (
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <h2>Votes: {this.props.votes}</h2>
                <div>
                    <img src={this.props.pic} alt='Superstar'/>
                    <div>
                        <h2>{this.props.name}</h2>
                        <p>{this.props.email}</p>
                    </div>
                </div>
                <ActionButton btnText="Vote Now!" clickhandler={this.props.clickhandler}/>
            </div>
        );
    }
    
}

export default Card;