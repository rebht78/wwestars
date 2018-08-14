import React, {Component} from 'react';

class SuperstarForm extends Component
{
    render() {
        return (
            <div>
                <div>
                    <label>Name:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text"/>
                </div>
                <div>
                    <button>Update</button>
                    <button>Cancel</button>
                </div>
            </div>
        );
    }
}