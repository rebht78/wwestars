import React, {Component} from 'react';
import ActionButton from './ActionButton';
import './Card.css';
import SuperstarForm from './SuperstarForm';

class Card extends Component {
    constructor() {
        super();
        this.state = {
           isOpen:false,
           isFlip:false
        }
    }
    render() {
        console.log("the value of is open through prop is "+this.props.isOpen);
        if (this.state.isOpen)
        {
            return(
                    <SuperstarForm name={this.props.name} email={this.props.email} />
            );
        }
        else {
            let classes = "tc bg-light-green dib br3 pa3 ma3 bw2 shadow-5 card";
            classes += (this.state.isFlip) ? ' flip':'';
            console.log(classes)
            return (
                <div onClick={this.cardClickHandler} className={classes}>
                    <div>
                        <div className="deletediv">
                            <ActionButton clickhandler={this.deleteStar} btnText="X"/>
                        </div>  
                        <div className="updatediv">
                            <ActionButton clickhandler={this.updateStar} btnText="U"/>
                        </div>  
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
        
    }
    cardClickHandler = (event) => {
        const isFlipped = this.state.isFlip;
        this.setState({isFlip:!isFlipped});
        console.log(this.state.isFlip);
    }
    increaseVote = (event) => {
        this.props.clickhandler(this.props.id);
    };

    deleteStar = (event) => {
        this.props.deletehandler(this.props.id);
    };

    updateStar = (event) => {
        this.setState({isOpen:true});
    };
}

export default Card;