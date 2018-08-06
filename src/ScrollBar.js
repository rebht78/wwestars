import React, {Component} from 'react';
import './ScrollBar.css';

class ScrollBar extends Component
{
    render() {
        return (
            <div className="scroll">
                {this.props.children}
            </div>
        );
    }
}

export default ScrollBar;