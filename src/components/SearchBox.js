import React, {Component} from 'react';
import './SearchBox.css';

class SearchBox extends Component
{
    render() {
        return (
            <div className='pa2 searchdiv'>
                <input
                    className='pa3 ba b--green bg-lightest-blue"' 
                    type='search' 
                    placeholder='Search Robot Superstar'
                    onInput={this.props.filter}
                    />
            </div>
        );
    }
}

export default SearchBox;