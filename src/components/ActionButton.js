import React, {Component} from 'react';
import './ActionButton.css';

class ActionButton extends Component
{
    render() {
        return (
            <div className="actiondiv">
                <button>{this.props.btnText}</button>
            </div>
        );
    }
}

export default ActionButton;