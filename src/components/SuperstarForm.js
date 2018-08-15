import React, {Component} from 'react';

class SuperstarForm extends Component
{
    render() {
        return (
            <div>
                <div>
                    <label>Name:</label>
                    <input type="text" defaultValue={this.props.name}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" defaultValue={this.props.email}/>
                </div>
                <div>
                    <button>Update</button>
                    <button>Cancel</button>
                </div>
            </div>
        );
    }
}