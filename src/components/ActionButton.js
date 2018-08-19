import React, {Component} from 'react';
import './ActionButton.css';

class ActionButton extends Component
{
    render() {
        return (      
            <div className="actiondiv">
                <button disabled={this.props.isdisable} onClick={this.props.clickhandler} className="actionbutton">
                    <span className="actiontext">
                     {this.props.btnText}
                    </span>
                </button>
            </div>
        );
    }
}

export default ActionButton;