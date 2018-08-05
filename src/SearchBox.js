import React, {Component} from 'react';

class SearchBox extends Component
{
    render() {
        return (
            <div className='pa2'>
                <input
                    className='pa3 ba b--green bg-lightest-blue"' 
                    type='search' 
                    placeholder='Enter Superstar Name'
                    onInput={this.props.filter}
                    />
            </div>
        );
    }
}

export default SearchBox;