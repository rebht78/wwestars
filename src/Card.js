import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src='' alt='Image of Superstar'/>
                <div>
                    <h2>The Undertaker</h2>
                    <p>undertaker@wwe.com</p>
                </div>
            </div>
        );
    }
}

export default Card;