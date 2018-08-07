import React, {Component} from 'react';
import './ActionButton.css';

class ActionButton extends Component
{
    render() {
        return (
            <div className="actiondiv">
                <button className="actionbutton">
                    <span className="actinotext">
                        {this.props.btnText}
                    </span>
                </button>
            </div>
        );
    }
}

export default ActionButton;