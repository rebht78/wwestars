import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component
{
    render() {
        const cardArray = this.props.superstars.map((item,i) => {
            return(<Card clickhandler={this.props.clickhandler} key={item.id} id={item.id} votes={item.votes} name={item.name} pic={`https://robohash.org/${item.name}?200x200`} email={item.email}/>);
        });
        return (
            <div>
                {cardArray}
            </div>
        );
    }
}

export default CardList;