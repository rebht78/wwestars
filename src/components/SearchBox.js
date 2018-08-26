import React, {Component} from 'react';
import './SearchBox.css';

class SearchBox extends Component
{
    render() {
        return (
            <div className='pa2 searchdiv'>
                <input
                    className='input-reset ba b--black-20 pa2 mb2 db w-100' 
                    type='search' 
                    placeholder='Search Robot Superstar'
                    onInput={this.props.filter}
                    />
            </div>
        );
    }
}

export default SearchBox;